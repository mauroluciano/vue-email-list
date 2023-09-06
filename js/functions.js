const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: [],
    };
  },

  mounted() {
    for (let i = 1; i <= 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
          const randomMail = result.data.response;
          this.mails.push(randomMail);
        });
    }
  },
}).mount("#app");
