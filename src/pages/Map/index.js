import { useEffect, useRef } from "react";
import styled from "styled-components"
import { PLFrame } from "../../components/PLFrame";
import Navbar from "../../components/Navbar";
import nowPlaceImg from '../../assets/Map/NowPlace.svg'
import Locations from "./Locations";
import pillImg from '../../assets/Map/pill.svg'



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
width: 100vw; /* Full viewport width */
height: 100vh; /* Full viewport height */
display: flex;
flex-direction: column;
justify-content: center;
margin: 0;
position: relative; /* Make sure the Navbar can be positioned relative to this container */


@media (min-width: 576px) { 
        width: 100vw; /* Ensure full width on smaller screens */
    }

    @media (min-width: 768px) { 
        width: 100vw; /* Ensure full width on tablets */
    }

    @media (min-width: 992px) { 
        width: 100vw; /* Ensure full width on desktops */
    }

    @media (min-width: 1200px) { 
        width: 100vw; /* Ensure full width on larger desktops */
    }


`
const MapHeader = styled.div`
    font-family: 'SUIT-Semibold';
    color: #1B1A1F;
    font-size: 17px;
    height: 47px;
    display:flex;
    justify-content: center;
    align-items: center;
    `

const KakaoMap = styled.div`
    height: calc(100vh - 47px - 50px); /* Full height minus header and navbar heights */
    width: 100%;
    position: relative;
`
const NavBarWrapper = styled.div`
    position: fixed; /* Fixed position to stay at the same place relative to the viewport */
    bottom: 14px; /* Distance from the bottom of the viewport */
    left: 0;
    right: 0; /* Full width to span across the screen */
    z-index: 1000; /* Ensure it is above the map */
    display: flex;
    justify-content: center; /* Center align horizontally */
    padding: 0 20px; /* Optional: add horizontal padding if needed */
`
