/**
 * usage:
 *
 * normal:
 *  const map = L.map('map', {
 *    crs: L.CRS.Baidu, // if use baidu
 *    center: [31.59, 120.29],
 *    zoom: 12,
 *    maxZoom: 18,
 *    minZoom: 5
 *  })
 *  L.tileLayer.chinaProvider('TianDiTu.Normal.Map').addTo(map)
 *  L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion').addTo(map)
 *
 */
/* eslint-disable */
import L from 'leaflet'
import 'proj4leaflet'

window.tileCoords = {}

L.TileLayer.ChinaProvider = L.TileLayer.extend({
  // cache range
  getTileUrl: function (coords) {
    var data = {
      r: '',
      s: this._getSubdomain(coords),
      x: coords.x,
      y: coords.y,
      z: this._getZoomForUrl()
    };
    if (this._map && !this._map.options.crs.infinite) {
      var invertedY = this._globalTileRange.max.y - coords.y;
      if (this.options.tms) {
        data['y'] = invertedY;
      }
      data['-y'] = invertedY;
    }

    const { x, y, z } = data;
    if (!tileCoords[z]) {
      tileCoords[z] = { max: data, min: data }
    } else {
      const compare = (type) => {
        const cur = tileCoords[z][type]
        tileCoords[z][type] = { x: Math[type](x, cur.x), y: Math[type](y, cur.y) }
      }
      compare('max')
      compare('min')
    }
    return L.Util.template(this._url, L.Util.extend(data, this.options));
  },
  initialize: function (type, options = {}) { // (type, Object)
    const { url, options: opt } = L.TileLayer.ChinaProvider.getProviderConf(type, options)
    L.TileLayer.prototype.initialize.call(this, url, opt);
  }
});

L.TileLayer.ChinaProvider.getProviderConf = function (type, options = {}) {
  const [providerName, mapName, mapType] = type.split('.');
  const { subdomains, [mapName]: mapConf } = L.TileLayer.ChinaProvider.providers[providerName]
  const url = mapConf[mapType];
  const { options: mapOptions = {} } = mapConf;
  if (providerName === 'Baidu') {
    const { styles } = mapOptions
    if (typeof styles === 'function') {
      mapOptions.styles = styles(options)
    }
    options = Object.assign(mapOptions, {
      name: options.name,
      tms: true
    }, options)
  }
  options.subdomains = mapOptions.subdomains || subdomains
  return { url, options }
}

L.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    // 标准地图
    Normal: {
      Map: "https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=c6469cdff6fc088c87f44bcd35201196",
      Annotion: "https://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=c6469cdff6fc088c87f44bcd35201196"
    },
    // 卫星图
    Satellite: {
      Map: "https://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=c6469cdff6fc088c87f44bcd35201196",
      Annotion: "https://t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=c6469cdff6fc088c87f44bcd35201196"
    },
    // 地势、地带图
    Terrain: {
      Map: "https://t{s}.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=c6469cdff6fc088c87f44bcd35201196",
      Annotion: "https://t{s}.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=c6469cdff6fc088c87f44bcd35201196"
    },
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
  },
  Baidu: {
    Normal: {
      Map: 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles={styles}&scaler=1&p=1',
      options: {
        styles: ({ bigfont }) => bigfont ? 'ph' : 'pl'
      }
    },
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
  }
};

L.tileLayer.chinaProvider = function (type, options) {
  return new L.TileLayer.ChinaProvider(type, options);
};

//请引入 proj4.js 和 proj4leaflet.js
L.CRS.Baidu = new L.Proj.CRS(
  'EPSG:900913',
  `+proj=merc
    +a=6378206
    +b=6356584.314245179
    +lat_ts=0.0
    +lon_0=0.0
    +x_0=0
    +y_0=0
    +k=1.0
    +units=m
    +nadgrids=@null
    +wktext
    +no_defs`, {
    resolutions: function () {
      var res = [],
        level = 19;
      res[0] = Math.pow(2, 18);
      for (var i = 1; i < level; i++) {
        res[i] = Math.pow(2, (18 - i))
      }
      return res;
    }(),
    origin: [0, 0],
    bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
  });