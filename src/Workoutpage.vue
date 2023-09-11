<template>
     

  <section class="features" id="features">
         <div>
             <a href="/profile" class="main-btn-up">Create an account</a>
         </div>
     </section>

     
     <el-table :data="filterTableData" style="width: 100%">
         <el-table-column label="Day" prop="day" />
         <el-table-column label="Training-part" prop="bodypart" />
         <el-table-column label="Sets" prop="set" />
         <el-table-column label="Exersices number" prop="exersices" />

         <el-table-column :align="'right'">
             <template #header>
                 <el-input v-model="search" size="small" placeholder="Type to search the Training part" />
             </template>
         <template #default="scope">
             <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                 >Edit</el-button
         >
     <!-- <el-button
       size="small"
       type="danger"
       @click="handleDelete(scope.$index, scope.row)"
       >Delete</el-button
     > -->
   </template>
 </el-table-column>
</el-table>

</template>



<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
day: string
bodypart: string
set: string 
exersices: string,
}

const search = ref('')
const filterTableData = computed(() =>
tableData.filter(
 (data) =>
   !search.value ||
   data.bodypart.toLowerCase().includes(search.value.toLowerCase())
)
)
const handleEdit = (index: number, row: User) => {
console.log(index, row)
}
// const handleDelete = (index: number, row: User) => {
// console.log(index, row)
// }



const tableData: User[] = [
{
 day: 'Montag',
 bodypart: 'Arms',
 set: '3',
 exersices: '6',

},
{
 day: 'Dienstag',
 bodypart: 'Back',
 set: '3',
 exersices: '4',
},
{
 day: 'Mittwoch',
 bodypart: 'Chest',
 set: '3',
 exersices: '4',
},
{
 day: 'Donnerstag',
 bodypart: 'REST-DAY',
 set: '0',
 exersices: '0',
},

{
 day: 'Freitag',
 bodypart: 'REST-DAY',
 set: '0',
 exersices: '0',
},

{
 day: 'Samstag',
 bodypart: 'Legs',
 set: '3',
 exersices: '4',
},

{
 day: 'Sonntag',
 bodypart: 'ABS',
 set: '4',
 exersices: '2',
},
]
</script>



<style lang="css" scoped>

::v-deep(.editable-cells-table td.p-cell-editing) {
 padding-top: 0.6rem;
 padding-bottom: 0.6rem;
}
</style>
