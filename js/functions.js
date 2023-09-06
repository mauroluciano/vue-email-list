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
        const randomNumber = response.data.response;
        this.mailArray = randomNumber;
      });
  },
}).mount("#app");
