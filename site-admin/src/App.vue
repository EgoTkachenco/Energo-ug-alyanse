<template>
  <div id="app">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">phone</th>
          <th scope="col">page</th>
          <th scope="col">time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in feedbacks" :key="id">
          <th scope="row">{{ id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.page }}</td>
          <td>{{ getDate(item.time) }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="sendMail">Send Mail</button>
  </div>
</template>

<script>
import { db } from "./db";
import moment from "moment";
import sgMail from "@sendgrid/mail";

export default {
  name: "App",
  data: () => ({
    feedbacks: [],
  }),
  created() {
    moment.locale("uk");
  },
  firestore: {
    feedbacks: db.collection("feedbacks"),
  },
  methods: {
    sendMail() {
      sgMail.setApiKey('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')
      const msg = {
        to: 'egortkachenco@gmail.com', // Change to your recipient
        from: 'egortkachenco@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getDate(seconds) {
      let date = moment(seconds.toDate());
      return date.format("LL") + date.format("LT");
    },
  },
};
</script>

<style>
/* @import url('../node_modules/bootstrap/dist/css/bootstrap'); */
</style>
