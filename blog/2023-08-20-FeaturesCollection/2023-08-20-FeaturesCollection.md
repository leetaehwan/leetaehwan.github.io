---
slug : features_collection
title : 폴리움의 key_on 파라미터와 GeoJson 및 GeoData 이해하기
authors :
  - name : 이태환
    title : 개발자
    url : https://github.com/leetaehwan
    image_url : https://github.com/leetaehwan.png
  
tags : [folium, Choropleth, __geo_interface__, GeoJSON, key_on]
---

## 폴리움으로 등차지역도 그리기
folium.Choropleth() 메서드를 이용해서 등차지역도를 그릴 수 있다.
[서울시 개별공시지가 정보](http://data.seoul.go.kr/dataList/OA-1180/F/1/datasetView.do)의 데이터를 활용하면, 동별 평균 공시지가를 구할 수 있고,
지정된 데이터의 법정동 이름과 공시지가의 컬럼을 가지고 데이터 만들고, 법정동 명을 키로 해서 지도에 시각화 시키고자 한다.

![](./1_folium_Choropleth)

key_on의 파라미터의 인수로서 geo_data의 컬럼을 지정하는 지 않고, JSON의 형식처럼 "feature.propertiees.bj_nm"을 넣어주었다.

geo_data는 어떻게 생겼길래 이렇게 넣어주는 것인가?

## Geo_data는 어떤 녀석인가?

여기에서 나오는 sungdong_gu_dong_gpd는 GeoDataFrame이다.

```python
sungdong_gu_dong_gpd.info()
```
를 출력해보자. GeoDataFrame이라고 한다. 컬럼들을 갖는게 데이터프레임과 비슷해보인다.

![](./2_sungdong_gu_dong_gpd)

```python
sungdong_gu_dong_gpd.head()
```
를 출력해보자. 여전히 데이터 프레임과 같아 보인다.

![](./3_sungdong_gu_dong_gpd)

```python
sungdong_gu_dong_gpd.to_json()
```
으로 JSON 형식으로 바꿔보자.

![](./4_sungdong_gu_dong_gpd)
한 줄로 나와서 보기가 불편하다.

```python
sungdong_gu_dong_gpd.__geo_interface__
```
으로 출력하니 보기가 좋다.

![](./5_sungdong_gu_dong_gpd)

우리가 찾는 구조의 json형식의 파일이 나온다. 그럼 JSON 자료형인가? `__geo_interface__` 에 대해서 알아보자.

## `__geo_interface__`이란 무엇인가?
`GeoDataFrame.__geo_interface__` 메서드는 GeoDataFrame을 파이썬의 GeoJSON 같은 FeaturesCollection의 형식으로 반환한다.

## folium.choropleth(key_on) 파라미터는 무엇인가?
`folium.Choropleth()`는 컬러 그레디언트를 사용해서 맵에 데이터를 시각화 하기 위해 사용하는 메서드이다.
메서드의 한 파라미터가 `key_on`이다. 이 파라미터는 다른 파라미터로 제공된 `data`와 매칭되어 사용되어질 GeoJSON 데이터의 property를 가리킨다.

위 코드에서 사용한 `key_on=feature.properties.bj_nm`을 쪼개서 이해해보면
- feature : folium이 GeoJSON을 구성하고 있는 feature 레벨 데이터에 접근하도록 말해준다.
- properties : feature와 함께 많이 쓰게 되는 `properties`는 GeoJSON Feature들로 묶여 저장된 데이터들을 말하며 `<GeoJSON_object>`의 하나이다.
- bj_nm : `properties`로 묶여진 특정 속성의 이름이다.


## 요약
- foilum.choropleth()는 geoData와 DataFrame을 연결하여 시각화 한다.
- 이때, DataFrame은 컬럼, GeoData는 GeoJSON의 property들을 매칭하여 시각화 한다.