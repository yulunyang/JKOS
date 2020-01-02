<template>
  <div class="main max-w-sm rounded overflow-hidden mx-auto mt-1">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-1 text-center text-blue-400">Choose Account Type</div>
      <div class="flex mb-4">
        <div class="w-1/2 py-1 px-2 relative">
          <label>
            <input type="radio" name="test" value="Doctor" checked v-model="selectIdentity">
            <div class="container border">
              <i class="fas fa-check-circle absolute text-blue-500" v-if="selectIdentity === 'Doctor'"></i>
              <img src="../assets/img_doctor_90@3x.svg" alt="a baby duckling sitting on its duckling butt">
              <p class="absolute name">Doctor</p>
            </div>
          </label>
        </div>
        <div class="w-1/2 py-1 px-2 relative">
        <label>
          <input type="radio" name="test" value="Paient" v-model="selectIdentity">
          <div class="container border">
            <i class="fas fa-check-circle absolute text-blue-500" v-if="selectIdentity === 'Paient'"></i>
            <img src="../assets/img_patient_90@3x.svg" alt="a baby duckling sitting on its duckling butt">
            <p class="absolute name">Paient</p>
          </div>
        </label>
        </div>
      </div>
      <p class="text-gray-700 text-base text-center">
        Hello {{selectIdentity}}!
      </p>
      <p class="text-gray-700 text-base text-center">Please fill out the form below to get started</p>
    </div>
    <div class="w-full">
      <form class="px-8 pt-6">
        <div class="mb-4">
          <div class="input-group mb-3 flex border px-2 py-3">
            <div class="input-group-prepend flex">
              <span class="input-group-text bg-white border-right-0 mr-3" id="basic-addon1">
                <i class="far fa-envelope text-gray-300"></i>
              </span>
            </div>
            <input type="text" class="w-full focus:outline-none  input-text" placeholder="email" autocomplete="off"
              aria-label="Username" aria-describedby="basic-addon1" v-model="account" id="email" >
            <label class="label-helper block text-white text-xs font-bold bg-blue-500 py-1 px-1" for="email">Email</label>
          </div>
        </div>
        <div class="mb-6">
          <div class="input-group mb-3 flex border px-2 py-3 items-center">
            <div class="input-group-prepend flex">
              <span class="input-group-text bg-white border-right-0 mr-3" id="basic-addon1">
                <i class="fas fa-lock text-gray-300"></i>
              </span>
            </div>
            <input type="text" class="w-full focus:outline-none input-text" placeholder="password" autocomplete="off"
              aria-label="password" aria-describedby="basic-addon1" v-model="password" id="password" >
            <label class="label-helper block text-white text-xs font-bold bg-blue-500 py-1 px-1" for="password">password</label>
            <button class="bg-transparent text-blue-500 px-2 border-l font-bold text-sm">
              Forget?
            </button>
          </div>
        </div>
        <div class="flex w-full justify-between items-center text-sm">
          <p>No Account? <a href="" class="text-blue-500 font-bold">Sign Up</a></p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-8 rounded" @click.prevent="login">
            Login
          </button>
        </div>
      </form>
    </div>
    <div class="city px-6">
      <img class="object-cotain w-full" src="../assets/img_town_370x170@3x.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      account: 'abc12345',
      password: 'c124345ksfh',
      selectIdentity: 'Doctor'
    }
  },
  components: {
  },
  created: function () {
  },
  computed: {
  },
  mounted: function () {
  },
  beforeDestroy () {
  },
  methods: {
    login () {
      let self = this
      if (self.password && self.account) {
        if (self.password.length >= 6) {
          let pwdArr = []
          var answer
          let accountItem = self.account.split('')
          for (let i = 0; i < self.password.length; i++) {
            let pwd = self.password.split('')
            let pwdStr = pwd.splice(i, 6)
            if (pwdStr.length === 6) {
              pwdArr.push(pwdStr)
            }
          }
          pwdArr.forEach(function (item, index, array) {
            accountItem.forEach(function (accountItem, index, array) {
              answer = item.find(function (item, index, array) {
                return item === accountItem
              })
            })
          })
          if (!answer) {
            alert('不通過')
          } else {
            alert('通過')
          }
        } else if (self.password.length < 6) {
          console.log('長度小於6')
          for (let i = 0; i < self.password.length; i++) {
            if (self.account.indexOf(self.password) !== -1) {
              alert('通過')
            } else {
              alert('不通過')
            }
          }
        }
      } else {
        alert('未填寫完全')
      }
    }
  }
}

</script>
<style lang="scss">
@import "~tailwindcss/base";
@import "~tailwindcss/components";
@import "~tailwindcss/utilities";

[type=radio] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

[type=radio] + .container {
  cursor: pointer;
}

[type=radio]:checked + .container {
  outline: 1px solid #63b3ed;
}

.container {
  width: 100%;
  padding-bottom: 100%;
  margin: 10% auto;
  position: relative;
  img {
    position: absolute;
    height: 65%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .name {
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

  }
}
.fa-check-circle {
  right: -.5rem;
  bottom: -1rem;
  font-size: 2rem;
  z-index: 10;
}
.input-group {
  position: relative;
  align-items: stretch;
  width: 100%;
}

.label-helper {
  position: absolute;
  opacity: 0;
  transition: .2s bottom, .2s opacity;
  bottom: 0;
  left: 3%;
  z-index: 1;
  }

.input-text:focus + .label-helper, .input-text:invalid + .label-helper {
  bottom: 80%;
  line-height: 1;
  opacity: 1;
  }
</style>
