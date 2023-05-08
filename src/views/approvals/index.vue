<template>
  <div class="dashboard-container">
    <div class="app-container">
      <div class="header_Host_Configuration">
        <span class="Host_Configuration">主播配置</span>
        <span class="residue"> <img class="img" src="@/assets/common/通知.png" alt="">主播配置（形象/声音）每月仅限重置2次，背景及桌面不限重置次数</span>
        <el-button type="danger" round class="Reset_button"><span class="span">重置(余1)</span></el-button>
        <span class="Effect_Preview">效果预览</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="14">
          <div class="grid-content bg-purple">
            <el-card class="box-card" style="margin-bottom:30px">
              <div style="overflow: auto; border-bottom: 1px solid #d9d9d9;">
                <span class="Image_selection">形象选择</span>
                <el-button class="Public_exclusive clearfix" style="overflow:hidden"><span class="Customized">定制形象</span></el-button>
              </div>
              <!-- 选择形象 -->
              <div class="el_select">
                <span class="text_gender">性别</span>
                <el-select
                  v-model="gender_value"
                  placeholder="全部"
                  size="mini"
                  class="gender"
                  clearable
                  @focus="function1"
                >
                  <el-option
                    v-for="item in gender"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
                <span class="text_gender">风格</span>
                <el-select v-model="value" placeholder="全部" size="mini" class="gender">
                  <el-option
                    v-for="item in style"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
                <span class="text_gender">姿势</span>
                <el-select v-model="value" placeholder="全部" size="mini" class="gender">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
                <span class="text_gender">服装</span>
                <el-select v-model="value" placeholder="全部" size="mini" class="gender">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <!-- 主播的图片 -->
              <div class="container">
                <div class="big-image-container">
                  <img src="@/assets/common/虚拟主播2倍.png" alt="">
                </div>
                <div class="small-images-container">
                  <div class="small-image-top">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                  </div>
                  <div class="small-image-bottom">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                    <img src="@/assets/common/虚拟主播.png" alt="">
                  </div>
                </div>
              </div>
              <!-- 制作分页的效果 -->
              <div class="block">
                <!-- <el-pagination
                  layout="prev, pager, next"
                  :total="100"
                  next-text="总共100条"
                /> -->
              </div>
            </el-card>
          </div>
          <!-- 背景选择部分 -->
          <el-col :span="24" class="el_col_background" style="padding-left:0px;">
            <span class="background_selection">背景选择</span>
            <div class="background_button">
              <el-button class="ai_generate" size="mini">AI生成</el-button>
              <el-button class="background_custom" size="mini">自定义背景</el-button>
            </div>
            <span class="background_selection_desktop">桌面选择</span>
            <div class="box_card_bottom_left">
              <el-card class="box_bottom_left">
                <div class="two_backgroud_image">
                  <img src="@/assets/common/Group 898@2x.png" alt="">
                </div>
                <div class="small_background">
                  <div class="small_background_top">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                  </div>
                  <div class="small_background_bottom">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                    <img src="@/assets/common/Group 900.png" alt="">
                  </div>
                  <!-- <el-pagination
                    layout="prev, pager, next"
                    :total="100"
                    next-text="总共100条"
                  /> -->
                </div>

              </el-card>
              <!-- 桌面选择部分 -->
              <el-col :span="6" class="el_col_background">
                <el-card class="box_bottom_left" style="width:637px">
                  <div class="two_backgroud_image">
                    <img src="@/assets/common/Group 898@2x.png" alt="">
                  </div>
                  <div class="small_desktop">
                    <div class="small_desktop_top">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                    </div>
                    <div class="small_desktop_center">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                    </div>
                    <div class="small_desktop_bottom">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                      <img src="@/assets/common/桌面背景.png" alt="">
                    </div>
                    <!-- <el-pagination
                      layout="prev, pager, next"
                      :total="100"
                      next-text="总共100条"
                    /> -->
                  </div>
                </el-card>
              </el-col>
            </div>
          </el-col>

        </el-col>
        <!-- 中间的声音选择部分 -->
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-button class="custom_desktop" size="mini">自定义桌面</el-button>
            <el-card class="box_card_center">
              <div style="overflow: auto; border-bottom: 1px solid #d9d9d9;">
                <span class="Image_selection">形象选择</span>
                <el-button class="Public_exclusive clearfix" style="overflow:hidden"><span class="Customized">定制形象</span></el-button>
              </div>
              <div class="sound">
                <img src="@/assets/common/声音.png" alt="">
                <span class="current">当前声音</span>
                <div class="timbre">
                  <span>音色</span>
                  <div class="imm el-icon-male"><span>小仙</span><span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" /></div>
                </div>
                <div class="Speech_speed clearfix">
                  <span>语速</span>
                  <el-slider v-model="speed" />
                  <span class="Double">*1倍速</span>
                </div>
              </div>
              <div>
                <p class="whole">全部声音</p>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <el-button round class="whole_imm el-icon-male">
                  <span>小仙</span>
                  <span class="el-icon-video-play" style="color:#96a4ba;font-size:15px; padding-left: 5px;" />
                </el-button>
                <!-- <el-pagination
                  small
                  background
                  layout="prev, pager, next"
                  :total="50"
                  pager-count
                  next-text="总共40条"
                  class="is_background"
                /> -->
              </div>
            </el-card>
          </div>

        </el-col>
        <!-- 右侧的预览部分 -->
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-card class="box_card_right" style="background-position-y: 10px;">
              <img src="@/assets/common/背景.png" alt="">
              <div class="Preview">
                <p>点击生成预览</p>
                <el-button class="el-icon-thumb small_hand" />
              </div>
              <div class="Anchor">
                <span>主播位置</span>
                <span>主播大小</span>
              </div>
              <div class="box_card_right_bottom" style="display:flex;">
                <div class="Anchor_Location" style="flex:1;position: relative;">
                  <div class="arrow arrow-left">
                    <img src="@/assets/common/左.png" alt="">
                  </div>
                  <div class="arrow arrow-right">
                    <img src="@/assets/common/右.png" alt="">
                  </div>
                  <div class="arrow arrow-up">
                    <img src="@/assets/common/上.png" alt="">
                  </div>
                  <div class="arrow arrow-down">
                    <img src="@/assets/common/下.png" alt="">
                  </div>
                  <div class="arrow arrow-center" />
                </div>
                <div class="Anchor_size" style="flex:1">
                  <span>小</span>
                  <!-- <el-slider v-model="Anchor_size" /> -->
                  <span>大</span>
                </div>
              </div>
              <el-button type="primary" class="save_button">保存</el-button>
            </el-card>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import { Postimagelist } from '@/api/departments'
export default {
  data() {
    return {
      // 背景选择

      // 选择项目
      gender: [{
        value: '0',
        label: '全部'
      }, {
        value: '1',
        label: '男'
      }, {
        value: '2',
        label: '女'
      }],
      style: [{
        value: '0',
        label: '全部'
      }, {
        value: '1',
        label: '2D真人'
      }, {
        value: '2',
        label: '3D模型'
      }, {
        value: '3',
        label: '卡通化'
      }],
      options: [{

        value: '3',
        label: '卡通化'

      }],
      gender_value: '',
      // 制作分页的效果
      page: 1,
      total: 10,
      pageSize: 3,
      currentPage: 3,
      pageList: [],
      // 调整语速
      speed: 0,
      // 主播的大小
      Anchor_size: 0
    }
  },

  methods: {
    function1() {
      const obj = this.gender_value
      console.log(123, obj)
      Postimagelist().then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    // 调整语速
    formatTooltip(val) {
      return val / 100
    },
    // 调证主播的大小
    Anchorsize(val) {
      return val / 100
    }
    // 背景选择

  }
}
</script>

<style lang="scss">
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: red;
  }
  .bg-purple-light {
    background: #e5e9f2;

  }
  .grid-content {
    position: relative;
    border-radius: 4px;
    min-height: 36px;
    .custom_desktop{
      position: absolute;
      bottom: -58px;
      right: 0;
       background: #3264F6;
       border-radius: 4px 4px 4px 4px;
       opacity: 1;
       color: #fff;
    }
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  //卡片样式 修改尺寸
.box-card {
    width: 973px;
    height: 408px;
    border-radius: 14px;
  }
.Host_Configuration{
  position: relative;
}

  // 修改尺寸
.Host_Configuration {
    border-left: 5px solid #3264F6;
    border-radius: 5%;
    padding-left: 5px;
    font-size: 16px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #252525;
    line-height: 14px;
  }

  .residue{
    width: 353px;
    height: 14px;
    position: relative;
    margin-left: 50px;
    line-height: 14px;
    font-size: 12px;
    font-family: Barlow-Regular, Barlow;
    font-weight: 400;
    color: #999BA0;
  }
  .img{
    position: absolute;
    top: 0px;
    left: -18px;
  }
  .Reset_button{
    margin-bottom: 15px;
    margin-left: 20px;
    width: 77px;
    height: 24px;
    background: rgba(235,68,90,0.1);
    opacity: 1;
    border: 1px solid #EB445A;
  }
  .span{
      color: #EB445A;
      font-size: 12px;
      text-align: center;
    }
  .el-button.is-round{
    text-align: center;
    padding: 0px 5px;
  }

  .Effect_Preview{
    position: absolute;
    top: 23px;
    right: 280px;
    border-left: 5px solid #3264F6;
    // border-radius: 5%;
    padding-left: 5px;
    font-size: 16px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #252525;
    line-height: 14px;
  }

  .Image_selection{
    margin-bottom: 20px;
    width: 68px;
    height: 25px;
    font-size: 14px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #55575E;
    line-height: 16px;
  }
  .el-card__body{
    padding: 10px;
  }
  .active {
  background-color: #0568FD;
  color: #fff;
}
.clearfix::before,.clearfix::after {
          content: '';
          clear: both;
          display: block;
          height: 0;
          visibility: hidden;
          zoom: 1;
}
.Public_exclusive{
  margin-bottom: 8px;
  width: 68px;
  height: 22px;
  background: #3264F6;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  float: right;
  position: relative;
}
 .Customized {
   position: absolute;
   top: 3px;
   right: 8px;
   width: 48px;
   height: 18px;
   font-size: 12px;
   font-family: Source Han Sans CN-Regular, Source Han Sans CN;
   font-weight: 400;
   color: #FFFFFF;
   line-height: 14px;
}
.text_gender{
  width: 29px;
  height: 22px;
  font-size: 12px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #55575E;
  line-height: 14px;
}
.gender{
  width: 110px;
  height: 26px;
  background: #FFFFFF;
}
.el_select{
  margin-top: 8px;
  margin-bottom: 8px;
  .text_gender{
    margin-left: 10px;
    margin-right: 8px;
  }
  .gender{
    margin-right: 6px;
  }
  .gender:last-child{
    margin-right: 0;
  }
}
//主播的图片
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
    .big-image-container {
      width: 191px;
      height: 266px;
      background: #EAF0FA;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      border: 2px solid #EAF0FA;
      margin-right:50px ;
      img{
        margin-top: 80px;
      }
    }
    .small-image-container {
      width: 100%;
      height: 100%;
}
    .small-image-top{
        img{
          width: 91px;
          height: 127px;
          background: #EAF0FA;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          margin-bottom: 10px;
          margin-right: 10px;
        }
      }

    .small-image-bottom{
      img{
            width: 91px;
            height: 127px;
            margin-right: 10px;
            background-color: #EAF0FA;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
          }
    }
}
.big-image-container img {
 margin: 20px;
}

.small-image-container div{
  margin-bottom: 20px;
   background-color: #EAF0FA;
}
// 制作分页
.block{
  display:flex;
  position:absolute;
  bottom:-2px;
  right:100px;
  .el-pagination{
    display: inline-flex;
  }
  span{
    font-size: 12px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #96A4BA;
    line-height: 30px;
  }
}
.box_card_center{
  width: 334px;
  height: 408px;
}
.sound{
  margin-top: 10px;
  margin-bottom: 25px;
  width: 310px;
  height: 136px;
  background: #EAF0FA;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  position: relative;
  img{
    margin-top: 10px;
    margin-left: 10px;
  }
  .current{
    width: 63px;
    height: 25px;
    font-size: 12px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #fff;
    line-height: 14px;
    background-color: #d5a600;
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
    // padding-bottom: 5px;
  }
  .timbre{
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    span{
      font-size: 12px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #55575E;
      line-height: 24px;
    }
    .imm{
      padding-left: 10px;
      padding-right: 0;
      margin-left: 15px;
      width: 81px;
      height: 26px;
      line-height: 26px;
      background: #FFFFFF;
      box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);
      opacity: 1;
      border-radius: 15px;
      span{
        font-size: 12px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #96A4BA;
        line-height: 14px;
      }
    }
  }
  .Speech_speed{
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    position: relative;
    // overflow: hidden;
    span{
      font-size: 12px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #55575E;
      line-height: 14px;
    }
    .el-slider__runway{
       width: 145px;
      height: 5px;
       background: #FFFFFF;
      position: absolute;
      top: -10px;
      left: 40px;
      // overflow: hidden;
    }
    .Double{
      position: absolute;
      top: 0px;
      right: 70px;
    }
  }
}
.whole{
  font-size: 12px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #55575E;
  line-height: 14px;
}
 .whole_imm{
   margin-right: 10px;
   margin-left: 10px;
   margin-bottom: 10px
   ;
   padding-left: 10px;
   padding-top: 3px;
    width: 81px;
    height: 26px;
    background: #EAF0FA;
    border-radius: 15px;
     span{
        font-size: 12px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #96A4BA;
        line-height: 14px;
      }
  }
  .btn-next{
    span{
      background-color: #fff;
    }
  }
  .is_background{
    display: inline-flex;
    padding-left: 90px;
  }
  // 效果预览
  .box_card_right{
    position: relative;
    padding-left: 10px;
    width: 335px;
    height: 750px;
    background-repeat: no-repeat;
    background-position: center;
    img{
      // text-align: center;s
      vertical-align: middle;
    }
    .Preview{
      position: absolute;
      top: 32%;
      left: 39%;
      text-align: center;
      p{
      font-size: 12px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 14px;
      margin: 0;
      }
      .small_hand{
        font-size: 20px;
        border: none;
        background: rgb(85 0 0 / 0%);
        color: #fff;
      }
    }
    .Anchor{
      font-size: 12px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #55575E;
      line-height: 14px;
      display: flex;
      padding-top: 10px;
      span{
        flex: 1;
      }
    }
     .box_card_right_bottom{
        display: flex;
        width: 300px;
        height: 100px;
      }
     .Anchor_Location{
       margin-top: 10px;
       flex:1;
       position: relative;
       .arrow-left{
         position: absolute;
         top: 30px;
         left: 0%;
       }
       .arrow-right{
         position: absolute;
         top: 30px;
         left: 40%;
       }
       .arrow-up{
          position: absolute;
          top: 12px;
          left: 12%;
       }
       .arrow-down{
         position: absolute;
         top: 73px;
         left: 12%;
       }
       .arrow-center{
         position: absolute;
         top: 41px;
         left: 19%;
         height: 24px;
         border-radius: 50%;
         width: 24px;
         background: rgba(112,128,175,0.5);
         opacity: 1;
       }
      }
      .Anchor_size{
        display: flex;
        line-height: 120px;
        span{
          font-size: 12px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #7A7C7E;
          line-height: 115px;
        }
        span:nth-child(1){
          margin-right: 10px;
          // font-size: 20px;
        }
        span:nth-child(2){
          margin-left: 10px;
        }
        .el-slider{
          // height: 100px;
          margin-top: 40px;
          width:65%;
        }
      }
  }
  .save_button{
    width: 100%;
    margin-top: 20px;
    background-color: #3264F6 ;
    border: none;
  }
  .save_button:hover{
    border: none;
    background-color: #3264F6 ;
  }

// 背景选择样式
  .el_col_background{
    position: relative;
     .background_selection{
    margin-top: 10px;
    border-left: 5px solid #3264F6;
    border-radius: 5%;
    padding-left: 5px;
    font-size: 16px;
    font-weight: 700;
  }
  .background_selection_desktop{
    position: absolute;
    top: 5px;
    right: 210px;
    border-left: 5px solid #3264F6;
    border-radius: 5%;
    padding-left: 5px;
    font-size: 16px;
    font-weight: 700;
  }
  .background_button{
    position: absolute;
    top: 0;
    left: 480px;
    .ai_generate{
      background: rgba(50,100,246,0.1);
      border-radius: 4px 4px 4px 4px;
      opacity: 1;
      border: 1px solid #3264F6;
    }
    .background_custom{
       background: #3264F6;
       border-radius: 4px 4px 4px 4px;
       opacity: 1;
       color: #fff;
    }
  }

  .box_card_bottom_left{
      display: flex;
      padding-left: 0;
      flex-wrap: wrap;
    .box_bottom_left{
      width: 648px;
      height: 265px;
      background-color: #fff;
      margin-top: 30px;
      margin-right: 20px;
      .el-card__body{
        display: flex;
        flex-wrap: wrap;
        .two_backgroud_image{
        width: 121px;
        height: 215px;
        margin: 10px;
        margin-right: 40px;
        img{
          width: 100%;
          height: 100%;
        }
        }
        .small_background{
          .small_background_top{
          display: flex;
          width: 54px;
          height: 97px;
          margin-top: 10px;
          // background-color: red;
          img{
            margin-right: 10px;
          }
        }
        .small_background_bottom{
          display: flex;
          width: 54px;
          height: 97px;
          margin-top: 10px;
          img{
            margin-right: 10px;
          }
        }
         .el-pagination{
            padding: 10px;
            }
        }

      }
    }
    .box_bottom_left{
      .small_desktop{
        margin-top: 10px;
        .small_desktop_top{
          display: flex;
          width: 82px;
          height: 57px;

          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          margin-bottom: 10px;
          img{
            background: #EAF0FA;
             margin-right: 10px;
          }
        }
        .small_desktop_center{
          display: flex;
          width: 82px;
          height: 57px;

          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          margin-bottom: 10px;
          img{
            background: #EAF0FA;
             margin-right: 10px;
          }
        }
        .small_desktop_bottom{
         display: flex;
          width: 82px;
          height: 57px;

          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          margin-bottom: 10px;
          img{
            background: #EAF0FA;
             margin-right: 10px;
          }
        }
      }

    }
  }
}

</style>

