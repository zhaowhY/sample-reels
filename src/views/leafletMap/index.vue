<template>
  <div class="leaflet">
    <div
      v-for="item of mapObj"
      :key="item.id"
    >
      <span class="leaflet__map-title">{{item.title}}</span>
      <div
        :id="item.id"
        class="leaflet__map"
      ></div>
    </div>

  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import './provider.china';

export default {
  data: () => ({
    mapObj: [
      {
        title: 'leaflet-标准图',
        id: 'Leaflet-Normal',
        map: 'Leaflet.Normal.Map',
        Annotion: '',
      },
      {
        title: '天地图-标准图',
        id: 'TianDiTu-Normal',
        map: 'TianDiTu.Normal.Map',
        Annotion: 'TianDiTu.Normal.Annotion',
      },
      {
        title: '天地图-卫星图',
        id: 'Leaflet-Satellite',
        map: 'TianDiTu.Satellite.Map',
        Annotion: 'TianDiTu.Satellite.Annotion',
      },
      {
        title: '天地图-地形图',
        id: 'Leaflet-Terrain',
        map: 'TianDiTu.Terrain.Map',
        Annotion: 'TianDiTu.Terrain.Annotion',
      },
      {
        title: '百度-标准图',
        id: 'Baidu-Normal',
        map: 'Baidu.Normal.Map',
        Annotion: '',
        crs: 'Baidu'
      }
    ]
  }),
  created() {
    if (this.mapObj.length % 2 !== 0) {
      this.mapObj.push({
        title: '',
        id: `placeholder${(new Date()).toString()}`,
        map: '',
        Annotion: '',
        crs: ''
      });
    }
  },
  mounted() {
    this.mapObj.forEach(item => {
      const {
        title, id, map, Annotion, crs
      } = item;
      if (!title) return;
      const options = {
        center: [39.915, 116.404],
        zoom: 11,
        maxZoom: 18,
        minZoom: 5
      };
      if (crs) options.crs = L.CRS[crs];
      const mapElement = L.map(id, options);

      if (id === 'Leaflet-Normal') {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(mapElement);
        return;
      }

      map && L.tileLayer.chinaProvider(map).addTo(mapElement);
      Annotion && L.tileLayer.chinaProvider(Annotion).addTo(mapElement);
    });
  }
};
</script>

<style lang="less" scoped>
.leaflet {
  padding-top: 24px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  > div {
    text-align: center;
    margin-bottom: 24px;
    flex: 0 0 48%;
    border: 1px solid #666;

    &:nth-last-child(1) {
      border: 0px;
    }
  }
}

.leaflet__map {
  height: 500px;
}

.leaflet__map-title {
  display: inline-block;
  font-weight: bold;
  font-size: 30px;
  margin: 16px 0;
}
</style>
