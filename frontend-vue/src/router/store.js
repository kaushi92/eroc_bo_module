import { reactive } from 'vue';

export const store = reactive({
  profile: null,    // stores authorized person profile
  companies: []     // stores list of companies
});
