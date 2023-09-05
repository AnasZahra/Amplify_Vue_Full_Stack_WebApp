<template>

<section class="features" id="features">
          <div>

            <a href="/profile" class="main-btn-up">Create an account</a>
  
          </div>
  </section>

  <div>

  <DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id"
        @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">
    <Column field="Day" header="Day" style="width: 20%">
        <template #editor="{ data, field }">
            <InputText v-model="data[field]" />
        </template>
    </Column>
    <Column field="Workout part" header="Workout part" style="width: 20%">
        <template #editor="{ data, field }">
            <InputText v-model="data[field]" />
        </template>
    </Column>
    <Column field="Time of the day" header="Time of the day" style="width: 20%">
        <template #editor="{ data, field }">
            <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                <template #option="slotProps">
                    <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)" />
                </template>
            </Dropdown>
        </template>
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
        </template>
    </Column>
    <Column field="price" header="Price" style="width: 20%">
        <template #body="{ data, field }">
            {{ formatCurrency(data[field]) }}
        </template>
        <template #editor="{ data, field }">
            <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" />
        </template>
    </Column>
    <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
  </DataTable>
</div>
</template>

<script>

import { ProductService } from '@/service/ProductService';
export default {
    data() {
        return {
            products: null,
            editingRows: [],
            statuses: [
                { label: 'Morning', value: 'Morning' },
                { label: 'Mid-day', value: 'Mid-day' },
                { label: 'Evening', value: 'Evening' }
            ]
        };
    },
    mounted() {
        ProductService.getWorkoutPlanMini().then((data) => (this.products = data));
    },
    methods: {
        onRowEditSave(event) {
            let { newData, index } = event;

            this.products[index] = newData;
        },
        getStatusLabel(status) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        }
    }
};

</script>




<style lang="css" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
}
</style>
