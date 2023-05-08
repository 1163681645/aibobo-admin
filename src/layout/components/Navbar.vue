<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <div class="app-breadcrumb">
      <el-button size="mini" type="warning" class="vip_btn" style="margin-right:20px"><span> 开通会员 </span></el-button>

      <span class="breadBtn"> <img src="@/assets/common/VIP.png" alt="">未开通</span>
    </div>
    <!-- <breadcrumb class="breadcrumb-container" /> -->

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img v-imagerror="defaultImg" src="@/assets/common/头像.png" class="user-avatar">
          <!-- <span class="name">{{ name }}</span> -->
          <!-- <i class="el-icon-caret-bottom" style="color: #fff" /> -->
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> 首页 </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://gitee.com/shuiruohanyu/hrsaas53">
            <el-dropdown-item>项目地址</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Breadcrumb,
    Hamburger
  },
  data() {
    return {
      defaultImg: require('@/assets/common/head.jpg')
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'name', 'staffPhoto'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    }

  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  // background-image: -webkit-linear-gradient(left, #3d6df8, #5b8cff);
  background-color: #3264f6;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .app-breadcrumb {
    position: absolute;
    top: 10px;
    right: 70px;
    .vip_btn{
    background: linear-gradient(180deg, #FFF5DC 30%, #D5A600 100%);
    border-radius: 14px 14px 14px 14px;
    opacity: 1;
    border: none ;
    span{
      width: 48px;
      height: 18px;
      font-size: 12px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #93750A;
      line-height: 14px;
    }
    }
    .breadBtn {
      // background: #84a9fe;
      font-size: 12px;
      color:rgba(255,255,255,0.5);
      padding: 0 10px;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
      padding-left: 20px;
      padding-right: 5px;
      img{
        position: absolute;
        top: 3px;
        right: 46px;
        // padding-top: 20px;
      }
    }
  }
  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 30px;
          height: 30px;
          border-radius: 15px;
          vertical-align: middle;
        }
        .name {
          color: #fff;
          vertical-align: middle;
          margin-left: 5px;
        }
        .user-dropdown {
          color: #fff;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
