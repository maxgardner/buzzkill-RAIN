import axios from 'axios';

const helpers = {

  // Authentication routes

  signUp: (firstName, lastName, email, password) => {
    let userData = {
      firstName: encodeURIComponent(firstName),
      lastName: encodeURIComponent(lastName),
      email: encodeURIComponent(email),
      password: encodeURIComponent(password)
    }
    return axios.post('/auth/signup', userData)
    .then(() => {
      return;
    })
    .catch((err) => {
      return err;
    });
  },

  logIn: (email, password) => {
    let userData = {
      email: encodeURIComponent(email),
      password: encodeURIComponent(password)
    }
    return axios.post('/auth/login', userData)
    .then((token) => {
      return ;
    })
    .catch((err) => {
      return err;
    });
  },

  // API queries to pull user's habits and sessions as well as to add a new
  // habit or session

  getHabits: (userid) => {
    return axios.get(`/habits/${userid}`).then((habits) => {
      if (habits.length === 0) {
        return false;
      }
      return habits;
    });
  },

  getSessions: (habitid) => {
    return axios.get(`/${habitid}/sessions`).then((sessions) => {
      if (sessions.length === 0) {
        return false;
      }
      return sessions;
    });
  },

  addSession: (habitid, newSession) => {
    return axios.post(`/${habitid}/sessions`, newSession)
    .then(() => {
      return;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export default helpers;
