const { createApp } = Vue;

createApp({
  data() {
    return {
      mailArray: [
        {
          mail: "mymail.1@gmail.com",
        },
        {
          mail: "mymail.2@gmail.com",
        },
        {
          mail: "mymail.3@gmail.com",
        },
        {
          mail: "mymail.4@gmail.com",
        },
        {
          mail: "mymail.5@gmail.com",
        },
        {
          mail: "mymail.6@gmail.com",
        },
        {
          mail: "mymail.7@gmail.com",
        },
        {
          mail: "mymail.8@gmail.com",
        },
        {
          mail: "mymail.9@gmail.com",
        },
        {
          mail: "mymail.10@gmail.com",
        },
      ],
    };
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const randomNumber = response.data.response;
        this.mailArray.mail = randomNumber;
        console.log(randomNumber);
      });
  },
}).mount("#app");
