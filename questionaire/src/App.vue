<template>
  <div id="app">
    <div class="sex content" v-show="page === 0">
      <p>1.请问您的性别是：</p>
      <Sex :sexList="sexList" @radio="checkSex"></Sex>
    </div>
    <div class="hobby content" v-show="page === 1">
      <p>2.请选择您的兴趣爱好(至少2个)：</p>
      <Hobby :hobbyList="hobbyList" @checkbox="checkHobby"></Hobby>
    </div>
    <div class="introduction content" v-show="page === 2">
      <p>3. 请介绍一下你自己：</p>
      <textarea rows="3" cols="30" placeholder="不能少于100字"
        @input="introInput" v-model="introduction"></textarea>
    </div>
    <div class="footer">
        <button
          @click="handleSubmit"
          v-if="page === 2"
          :class="{'ableClick': !isSubmit}"
          :disabled="!isSubmit"
        >提交</button>
        <button 
          @click="handleBack" 
          v-if="page !== 0"
          :class="{'ableClick': page === 1 && !isHobbyBack }"
          :disabled="page === 1 && !isHobbyBack"
        >上一步</button>
        <button
          @click="handleNext"
          v-if="page !== 2"
          :class="{'ableClick': (page === 0 && !isSexNext) || (page === 1 && !isHobbyNext)}"
          :disabled="(page === 0 && !isSexNext) || (page === 1 && !isHobbyNext)"
        >下一步</button>
        <button @click="handleReset">重置</button>
      </div>
  </div>
</template>

<script>
import Sex from './components/Sex'
import Hobby from './components/Hobby'
export default {
  components: {
    Sex,
    Hobby
  },
  data() {
    return {
      page: 0, // 填到第几页了
      sexValue: '', // 性别选择value
      hobbyValue: '', // 爱好选择value
      introduction: '', // 第三页介绍内容
      isSexNext: false, // 性别页是否可以下一步
      isHobbyNext: false, // 爱好页是否可以下一步
      isHobbyBack: true, // 爱好页是否可以上一步
      isSubmit: false, // 是否可以提交
      sexList: [
        {
          name: '男',
          value: 'man'
        },
        {
          name: '女',
          value: 'woman'
        },
        {
          name: '保密',
          value: 'secret'
        },
      ],
      hobbyList: [
        {
          name: '看书',
          value: 'book'
        },
        {
          name: '游泳',
          value: 'swim'
        },
        {
          name: '跑步',
          value: 'run'
        },
        {
          name: '看电影',
          value: 'movie'
        },
        {
          name: '听音乐',
          value: 'music'
        }
      ],
    }
  },
  methods: {
    checkSex(data) {
      if(data) {
        this.isSexNext = true;
      }
      this.sexValue = data;
    },
    checkHobby(arr) {
      if(arr.length > 1) {
        this.isHobbyNext = true;
      }
      this.hobbyValue = arr;
    },
    introInput() {
      if(this.introduction.length > 100) {
        this.isSubmit = true;
      } else {
        this.isSubmit = false;
      }
    },
    handleSubmit() {
      // 调用后段接口
    },
    handleNext() {
      this.page++;
    },
    handleBack() {
      this.page--;
    },
    handleReset() {
      // todo 第一二页重置
      switch(this.page) {
        case 2: this.introduction = ''
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 20px;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 750px;
}
.footer {
  position: absolute;
  bottom: 20px;
}
button {
  font-size: 16px;
  padding: 10px 14px;
  border: 1px solid #0066ff;
  border-radius: 6px;
  background: #0066ff;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
}
textarea {
  border: 1px solid #eee;
  outline: none;
}
.ableClick {
  background: #eee;
  color: grey;
}
</style>
