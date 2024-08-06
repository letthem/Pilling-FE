import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PLFrame } from "../../components/PLFrame";
import Navbar from "../../components/Navbar";
import nowPlaceImg from "../../assets/Map/NowPlace.svg";
import Locations from "./Locations";
import { axiosInstance } from "../../api/api";
import pmMarker from "../../assets/Map/pmMarker1.svg";
import locationImg from "../../assets/Map/location.svg";
import phonecall from "../../assets/Map/phonecall.svg";
import positionNow from "../../assets/Map/positionwhere.svg";
import deleteBtn from "../../assets/Map/deleteB.svg";
import { format } from "date-fns";

const Map = () => {
  const { kakao } = window;
  const location = Locations();
  const container = useRef(null);
  const [info, setInfo] = useState({});
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({});
  const [bakcMarkerImg, setBackMarkerImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const toDate = new Date();
  const todayDayIndex = toDate.getDay(); // Get today’s day index (0-6)

  // 정보를 get 해오는 함수
  const fetchPlacesInfo = async (position, map) => {
    const ps = new kakao.maps.services.Places();

    const psCallback = async function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < result.length; i++) {
          const place = result[i];
          const phoneCallNumberByKakao = place.phone;

          try {
            const res = await axiosInstance.post(
              `/pharm`,
              {
                lat: parseFloat(place.y),
                lon: parseFloat(place.x),
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
              }
            );

            const timePm = res.data.timeFri;
            const timePmAll = [
              res.data.timeSun,
              res.data.timeMon,
              res.data.timeTue,
              res.data.timeWed,
              res.data.timeThu,
              res.data.timeFri,
              res.data.timeSat,
            ];

            const formatMinutes = (minutes) =>
              minutes === "00" ? "00" : minutes;

            const formatTimePeriod = (timePeriod) => {
              if (!timePeriod || timePeriod.length !== 9) {
                return "영업일이 아닙니다";
              }

              const openhours = timePeriod.slice(0, 2);
              const openminutes = timePeriod.slice(2, 4);
              const closehours = timePeriod.slice(5, 7);
              const closeminutes = timePeriod.slice(7, 9);

              return `${parseInt(openhours, 10)}:${formatMinutes(openminutes)} ~ ${parseInt(closehours, 10)}:${formatMinutes(closeminutes)}`;
            };

            const timePmAllRe = timePmAll.map(formatTimePeriod);

            //원래 코드////////
            const openhours1 = timePm.slice(0, 2);
            const openminutes1 = timePm.slice(2, 4);
            const closehours1 = timePm.slice(5, 7);
            const closeminutes1 = timePm.slice(7, 9);
            const timeRun = `${parseInt(openhours1, 10)}:${formatMinutes(openminutes1)} ~ ${parseInt(closehours1, 10)}:${formatMinutes(closeminutes1)}`;
            //

            const PmInfoByDB = {
              name: res.data.name,
              time: timePmAllRe,
              addr: res.data.addr,
              distance: place.distance,
              phone: phoneCallNumberByKakao,
            };

            // Display the marker with business hours
            displayMarker(place, timeRun, PmInfoByDB, map, i);
          } catch (error) {
            if (error.response && error.response.status === 400) {
              displayMarker(place, " - ", map);
            } else {
              console.error("서버 요청 실패:", error.message);
            }
          }
        }
      }
    };

    ps.categorySearch("PM9", psCallback, { location: position });
  };

  const initMap = () => {
    if (location) {
      const position = new kakao.maps.LatLng(
        location.latitude,
        location.longitude
      );
      const options = {
        center: position,
        level: 4,
      };

      const map = new kakao.maps.Map(container.current, options);

      const imageSrc = nowPlaceImg;
      const imageSize = new kakao.maps.Size(30, 69);
      const imageOption = { offset: new kakao.maps.Point(32, 69) };

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      const marker = new kakao.maps.Marker({
        position,
        image: markerImage,
        clickable: true,
      });

      marker.setMap(map);

      fetchPlacesInfo(position, map);
    }
  };

  // 마커를 화면에 표시하고 클릭 이벤트를 설정하는 함수
  function displayMarker(place, time, PmInfo, map, index) {
    const pillImgSrc = pmMarker;
    const pillImgSize = new kakao.maps.Size(30, 30);
    const pillImgOption = { offset: new kakao.maps.Point(15, 30) };

    const pillMarkerImg = new kakao.maps.MarkerImage(
      pillImgSrc,
      pillImgSize,
      pillImgOption
    );
    const PmPosition = new kakao.maps.LatLng(place.y, place.x);
    setBackMarkerImg(pillMarkerImg);

    const PmMarker = new kakao.maps.Marker({
      map: map,
      position: PmPosition,
      image: pillMarkerImg,
      id: index,
      clickable: true,
    });

    const newsize = new kakao.maps.Size(30, 40);
    const newMarkerImg = new kakao.maps.MarkerImage(
      locationImg,
      newsize,
      pillImgOption
    );

    kakao.maps.event.addListener(PmMarker, "click", function () {
      const setPosition = PmMarker.getPosition();
      PmMarker.setImage(newMarkerImg);
      setMarkerPosition(PmPosition);
      setInfo(PmInfo);
      setSelectedMarker(PmMarker);
    });
  }

  useEffect(() => {
    if (kakao) {
      setIsLoading(true);
      kakao.maps.load(() => initMap());
      setIsLoading(false);
    } else {
      console.error("Kakao Maps API 로드 실패");
    }

    return () => {
      if (selectedMarker) {
        selectedMarker.setImage(null);
      }
    };
  }, [location]);

  // Delete button handler
  const deleteInfo = () => {
    setInfo({});
    if (selectedMarker) {
      setSelectedMarker(null);
    }
  };

  useEffect(() => {
    return () => {
      if (selectedMarker && bakcMarkerImg) {
        selectedMarker.setImage(bakcMarkerImg);
      }
    };
  }, [selectedMarker]);

  return (
    <PLFrame>
      <MapWrapper>
        <MapHeader>약국지도</MapHeader>
        <LoadingBox></LoadingBox>
        <KakaoMap id="map" ref={container}></KakaoMap>
        <NavBarWrapper>
          {info.name && (
            <>
              <NowDistance>
                <p>
                  현위치에서 <span>{info.distance}m</span>
                </p>
              </NowDistance>
              <PmInfotmation>
                <Delete src={deleteBtn} onClick={deleteInfo} />
                <PmName>{info.name}</PmName>
                {info.time[todayDayIndex].length === 9 ? (
                  <ClosePmTime>{info.time[todayDayIndex]}</ClosePmTime>
                ) : (
                  <PmTime className="open">
                    영업시간<span>{info.time[todayDayIndex]}</span>
                  </PmTime>
                )}
                <PmNumberBox>
                  <img src={phonecall} alt="전화 아이콘" />
                  <PmNumber>{info.phone}</PmNumber>
                </PmNumberBox>
                <PmPositionShowBox>
                  <img src={positionNow} alt="위치 아이콘" />
                  <PmPositionShow>{info.addr}</PmPositionShow>
                </PmPositionShowBox>
              </PmInfotmation>
            </>
          )}
          <Navbar />
        </NavBarWrapper>
      </MapWrapper>
    </PLFrame>
  );
};

export default Map;

const Delete = styled.img`
  cursor: pointer;
  position: absolute;
  top: 1.9375rem;
  right: 1.5625rem;
  color: #adadad;
`;

const NowDistance = styled.div`
  position: fixed;
  top: 5rem;
  color: #fff;
  width: 9.375rem;
  height: 2.625rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: #2b2a2f;
  box-shadow: 0rem 0rem 0.25rem 0rem #d1d3d9;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-family: "SUIT-SemiBold";
    font-size: 0.875rem;
    line-height: 1.3;
  }

  span {
    font-family: "SUIT-ExtraBold";
    margin-left: 0.1875rem;
  }
`;

const PmInfotmation = styled.div`
  z-index: 50;
  width: calc(100% - 2.75rem);
  max-width: 29rem;
  margin: 0 1.375rem;
  height: 12.5625rem;
  position: absolute;
  bottom: 3.75rem;
  border-radius: 1.875rem;
  background: #fff;
  box-shadow: 0rem 0rem 0.25rem 0rem #d1d3d9;
`;

const PmName = styled.div`
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 1.375rem;
  line-height: 1;
  margin: 1.625rem 0 0.9375rem 1.75rem;
`;

const PmNumberBox = styled.div`
  margin: 1rem 0 0 1.9375rem;
  display: flex;
  align-items: center;
`;

const PmNumber = styled.div`
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 0.8125rem;
  line-height: 130%;
  margin-left: 1.0625rem;
`;

const PmPositionShowBox = styled.div`
  margin: 0.9375rem 2.3125rem 0 1.9206rem;
  display: flex;
  align-items: center;
  height: 1.875rem;
`;

const PmPositionShow = styled.div`
  color: #1b1a1f;
  font-family: "SUIT-Regular";
  font-size: 0.8125rem;
  line-height: 140%;
  margin-left: 1.0625rem;
`;

const PmTime = styled.div`
  width: 9.8125rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 2.5rem;
  background: #2b2a2f;
  margin-left: 1.5rem;
  color: #fff;
  font-family: "SUIT-SemiBold";
  font-size: 0.75rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 0.5rem;
  }
`;

const ClosePmTime = styled.div`
  width: 7.5rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 2.5rem;
  background: #2b2a2f;
  margin-left: 1.5rem;
  color: #fff;
  font-family: "SUIT-SemiBold";
  font-size: 0.75rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  position: relative;
`;

const MapHeader = styled.div`
  z-index: 10;
  font-family: "SUIT-SemiBold";
  color: #1b1a1f;
  background-color: white;
  font-size: 1.0625rem;
  height: 4.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 2.25rem;
  border-bottom-right-radius: 2.25rem;
`;

const KakaoMap = styled.div`
  height: calc(100vh);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const NavBarWrapper = styled.div`
  position: fixed;
  bottom: 0.875rem;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
`;

export const LoadingBox = styled.div`
  width: calc(100% - 3rem);
  min-width: 20.4375rem;
  margin: 18.8125rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: "SUIT-SemiBold";
  font-size: 1rem;
  line-height: 1.2%;
  position: absolute;
  top: 2.5rem;

  img {
    margin-top: 1.375rem;
  }

  @media (max-width: 25rem) {
    margin: 13.125rem 1.5rem 0;
  }
`;
