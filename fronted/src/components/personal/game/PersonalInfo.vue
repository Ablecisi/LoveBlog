<template>
  <div :class="['profile-container', { 'dark-mode': isDarkMode }]">
    <h1>个人信息</h1>

    <!-- 头像上传 -->
    <div class="avatar-section">
      <img :src="profile.avatar" alt="头像" class="avatar" />
      <input type="file" accept="image/*" @change="handleAvatarChange" />
      <button @click="uploadAvatar">更换头像</button>
    </div>

    <!-- 个人信息表单 -->
    <form @submit.prevent="saveProfile">
      <div class="form-group">
        <label for="name">姓名:</label>
        <input type="text" id="name" v-model="profile.name" />
      </div>
      <div class="form-group">
        <label for="age">年龄:</label>
        <input type="number" id="age" v-model="profile.age" />
      </div>
      <div class="form-group">
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="profile.email" />
      </div>
      <div class="form-group">
        <label for="address">地址:</label>
        <input type="text" id="address" v-model="profile.address" />
      </div>
      <div class="form-group">
        <label for="password">修改密码:</label>
        <input type="password" id="password" v-model="profile.password" />
      </div>

      <div class="actions">
        <button type="submit">保存</button>
        <button type="button" @click="resetForm">重置</button>
      </div>
    </form>

    <!-- 系统设置 -->
    <div class="settings-section">
      <h2>系统设置</h2>
      <div class="setting-item">
        <label>主题模式:</label>
        <button @click="toggleDarkMode">
          {{ isDarkMode ? '切换亮色模式' : '切换暗色模式' }}
        </button>
      </div>
    </div>

    <!-- 保存成功提示 -->
    <div v-if="saved" class="saved-message">
      信息已保存！
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const profile = ref({
      name: '张三',
      age: 25,
      email: 'zhangsan@example.com',
      address: '北京市朝阳区',
      password: '',
      avatar: 'https://avatars.githubusercontent.com/u/499550?s=60&v=4' // 默认头像
    });

    const saved = ref(false);
    const isDarkMode = ref(false);

    // 保存个人信息
    const saveProfile = () => {
      console.log('保存的信息:', profile.value);
      saved.value = true;
      setTimeout(() => {
        saved.value = false;
      }, 3000);
    };

    // 重置表单
    const resetForm = () => {
      profile.value = {
        name: '张三',
        age: 25,
        email: 'zhangsan@example.com',
        address: '北京市朝阳区',
        password: '',
        avatar: 'https://via.placeholder.com/150'
      };
    };

    // 更换头像
    const handleAvatarChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profile.value.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    // 上传头像（模拟）
    const uploadAvatar = () => {
      alert('头像上传成功！');
    };

    // 切换暗色模式
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    return {
      profile,
      saved,
      isDarkMode,
      saveProfile,
      resetForm,
      handleAvatarChange,
      uploadAvatar,
      toggleDarkMode
    };
  }
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
}

.profile-container.dark-mode {
  background-color: #333;
  color: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.avatar-section {
  text-align: center;
  margin-bottom: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.avatar-section input {
  display: none;
}

.avatar-section button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.avatar-section button:hover {
  background-color: #369f6e;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"] {
  background-color: #42b983;
  color: white;
}

button[type="submit"]:hover {
  background-color: #369f6e;
}

button[type="button"] {
  background-color: #f0f0f0;
  color: #333;
}

button[type="button"]:hover {
  background-color: #ddd;
}

.settings-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
}

.setting-item {
  margin-bottom: 15px;
}

.saved-message {
  margin-top: 15px;
  color: green;
  font-weight: bold;
  text-align: center;
}
</style>