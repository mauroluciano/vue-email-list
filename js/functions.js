const { createApp } = Vue;

createApp({
  data() {
    return {
      mailArray: 0,
    };
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const randomMail = response.data.response;
        this.mailArray = randomMail;
      });
  },
}).mount("#app");
