import { useEffect, useRef } from "react";
import styled from "styled-components"
import { PLFrame } from "../../components/PLFrame";
import Navbar from "../../components/Navbar";
import nowPlaceImg from '../../assets/Map/NowPlace.svg'
import Locations from "./Locations";
import pillImg from '../../assets/Map/pill.svg'

// 맵에서 정보 받아올때 로딩 처리 꼭해주기 -> 로딩 페이지를 만들어서 페이지 로딩 표시해주자 ( 조금 오래걸림 )

const Map = () =>
    {
        const { kakao } = window;
        const location = Locations();
        const container = useRef(null);

        
        const initMap = () => {
            if (location) {
                const position = new kakao.maps.LatLng(location.latitude, location.longitude);
                const options = {
                    center: position, //지도 중심좌표
                    level: 4, // 지도의 확대 레벨
                };
                const map = new kakao.maps.Map(container.current, options);//지도 생성 및 객체 리턴


                const ps = new kakao.maps.services.Places();

                const psCallback = function(result, status) {
                  if (status === kakao.maps.services.Status.OK) {
                      console.log(result);
                      
                      let bounds = new kakao.maps.LatLngBounds();    
                    
                      for (let i=0; i<result.length; i++) {
                        displayMarker(result[i]);    
                        bounds.extend(new kakao.maps.LatLng(result[i].y, result[i].x));
                        console.log(result[i].y, result[i].x); // 여기서 나중에 약국 위도 경도 넘겨주는 걸ㅗ


                        
                    }       
    
                    map.setBounds(bounds);
                    
                  }
              };

              function displayMarker(place) {
                const pillImgSrc = pillImg;
                const pillImgSize = new kakao.maps.Size(30, 30);
                const pillImgOption = {offset: new kakao.maps.Point(40, 40)};

                const pillMarkerImg = new kakao.maps.MarkerImage(pillImgSrc, pillImgSize, pillImgOption)

                let PmMarker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(place.y, place.x),
                    image: pillMarkerImg
                });
            }
              
              // 약국 코드 검색
                ps.categorySearch('PM9', psCallback, {
                  location: position,
                });

                
                //마커 커스텀
                const imageSrc = nowPlaceImg;
                const imageSize = new kakao.maps.Size(64, 69);
                const imageOption = {offset: new kakao.maps.Point(40, 40)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                
                const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
                const marker = new kakao.maps.Marker({
                    position,
                    image: markerImage,
                }); 
                const content = `
                <div>
                <span></span>
                </div>`;
                
                
                new kakao.maps.CustomOverlay({
                    map,
                    position,
                    content
                })
                marker.setMap(map);
            };
        }
            
            useEffect(() =>{
            if (kakao) {
                    kakao.maps.load(() => initMap());
                } else {
                    console.error("Kakao Maps API 로드 실패");
                    
                }
            }, [location])

        return (
            
                <MapWrapper>
                <MapHeader>약국지도</MapHeader>
                <KakaoMap id="map" ref={container}>
                    <NavBarWrapper>

                    <Navbar/>

                    </NavBarWrapper>
                    </KakaoMap>
                </MapWrapper> 
        
        )
    }
export default Map;

const MapWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    position: relative;

    @media (min-width: 36rem) { 
        width: 100vw; 
    }

    @media (min-width: 48rem) { 
        width: 100vw; 
    }

    @media (min-width: 62rem) { 
        width: 100vw; 
    }

    @media (min-width: 75rem) { 
        width: 100vw; 
    }
`;

const MapHeader = styled.div`
    font-family: 'SUIT-Semibold';
    color: #1B1A1F;
    font-size: 1.0625rem;
    height: 2.9375rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const KakaoMap = styled.div`
    height: calc(100vh - 2.9375rem - 3.125rem); 
    width: 100%;
    position: relative;
`;

const NavBarWrapper = styled.div`
    position: fixed; 
    bottom: 0.875rem;
    left: 0;
    right: 0; 
    z-index: 1000; 
    display: flex;
    justify-content: center; 
    padding: 0 1.25rem; 
`;
