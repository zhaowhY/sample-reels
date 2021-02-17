<template>
  <div style="padding-top: 50px;">
    <div class="wrapper">
      <!-- 示例demo区域 -->
      <div class="section-demo">
        <h1>DEMO</h1>

        <div>
          <h2>
            原图:
          </h2>
          <img
            :src="this.demoImg"
            alt=""
            class="section-demo-img"
            ref="demoImgRef"
          >
        </div>

        <div style="margin-top: 24px;">
          <h2>
            加水印后:
          </h2>
          <canvas id="demoCanvas"></canvas>

        </div>
      </div>

      <!-- 动态上产区域 -->
      <div class="section-dynamic">
        <h1>体验区域</h1>

        <div>
          <h2>
            给上传的图片加水印:
          </h2>
          <el-upload
            style="margin-top: 8px;"
            action=""
            accept=".jpg, .png"
            :on-change="fileChange"
            :show-file-list="false"
            :auto-upload="false"
          >
            <el-button
              size="small"
              type="primary"
            >点击上传</el-button>
            <div
              slot="tip"
              class="el-upload__tip"
            >只能上传jpg/png文件，且不超过3M</div>
          </el-upload>
        </div>

        <div style="margin-top: 24px;">
          <h2>
            加水印后:
          </h2>
          <canvas id="dynamicCanvas"></canvas>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import demoImg from '@/assets/vueLogo.png';

export default {
  data: () => ({
    time: null,
    demoImgRef: null,
    demoImg,
  }),
  mounted() {
    this.demoMark();
  },
  methods: {
    fileChange(file) {
      const imgFile = file.raw;
      if (imgFile.size > 3 * 1024 * 1024) {
        this.$message.error('图片应不大于3M');
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(imgFile);
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          this.waterMark(image, document.getElementById('dynamicCanvas'), { width: 500 });
        };
      };
    },
    demoMark() {
      const image = new Image();
      image.src = this.demoImg;

      image.onload = () => {
        this.waterMark(image, document.getElementById('demoCanvas'));
      };
    },
    waterMark(image, canvas, props = {}) {
      const {
        naturalWidth, naturalHeight
      } = image;
      let { width = 200 } = props;
      width = Number(width);
      if (!width || width <= 0) {
        this.$message.error('请设置正确的图片宽度');
      }
      canvas.width = width;
      canvas.height = naturalHeight / (naturalWidth / width);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgb(242, 242, 242)';
      ctx.font = '16px serif';
      ctx.rotate((Math.PI / 180) * 20);
      for (let i = -500; i < canvas.width * 1.2; i += 100) {
        for (let j = -250; j < canvas.height * 1.2; j += 50) {
          ctx.fillText('watermark', i, j);
        }
      }
      canvas.toDataURL('image/png');
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  margin-top: 24px;
  width: 1000px;
  justify-content: space-between;
  padding: 0 24px;
}

.section-demo {
  flex: 1 0 45%;
  text-align: center;
}


.section-dynamic {
  flex: 1 0 55%;
}

h1 {
  margin-bottom: 16px;
}


</style>
