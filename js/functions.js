const { createApp } = Vue;

createApp({
  data() {
    return {
      mail: "",
    };
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const randomMail = response.data.response;
        this.mail = randomMail;
      });
  },
}).mount("#app");
