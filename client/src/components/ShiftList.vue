<template>
  <div class="row">
    <div class="col-8 offset-2">
      <h3>Current Shifts:</h3>

<accordion :panes="panes"/>
    </div>
  </div>
</div>
</template>

<script>
import shiftService from "@/services/shiftService";
import { Accordion } from 'mdbvue';
var moment = require('moment');
moment().format();

export default {
  name: "ShiftList",
  data: () => ({
    shifts: [],
    panes: []
  }),
  created() {
    this.updateShifts();
  },
  methods: {
    updateShifts() {
      shiftService.all().then(res => {
        this.shifts = res.data;
      for (let i = 0; i < this.shifts.length; i++){
        // })
        let pane = {}
        pane.title = `${res.data[i].name} 
                      <br>
                      ${moment(res.data[i].date,'YYYY-MM-DD hh:mm:ss').format('MM-DD-YYYY')}`
        pane.content = `
        <table class="table table-responsive">
        <thead>
            <tr>
              <th>ID</th>
              <th>Reason</th>
              <th>Duration</th>
              <th>Role</th>
              <th>Covered</th>
              <th>Priority</th>
              <th>Person Responsible</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="shift in shifts" :key="shift.id">
              <td>${res.data[i].id}</td>
              <td>${res.data[i].reason}</td>
              <td>${res.data[i].duration}</td>
              <td>${res.data[i].role}</td>
              <td>${res.data[i].covered}</td>
              <td>${res.data[i].priority}</td>
              <td>${res.data[i].personResponsible}</td>
              </tr>
              <tr>
            
            </tr>
            </table>
            <table class="table table-responsive">
              <ul class="list-inline" style="list-style-type: none;">
                <li class="list-inline-item"><b-btn class="btn btn-success">Claim</b-btn
                <li class="list-inline-item"><b-btn class="btn btn-success">Edit</b-btn>
                <li class="list-inline-item"><b-btn @click="deleteShift(shift.id)" class="btn btn-danger delete">x</b-btn>
              </ul>
              </table>
         `
        this.panes.push(pane)
      }
      });
    },
    deleteShift(id) {
      shiftService.delete(id).then(res => {
        this.updateShifts();
      });
    }
  },
  components: {
    Accordion,
  }
};
</script>

<style scoped>
h3 {
  color: #42b983;
}
th {
  font-size: 18px;
}
tbody {
  background-image: linear-gradient(rgb(207, 252, 201), #42b983);
  box-shadow: 0 0 40px black;
}

</style>
