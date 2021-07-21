import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetifyPresets = {
  theme:{
    themes: {
      light: {
        primary: '#610378',
        secondary: '#76FF00',
        tertiary: '#E57373',
        accent: '#005CAF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#fafbfc'
      },
      dark: {
        primary: '#990000',
        secondary: '#5CBBF6',
        tertiary: '#E57373',
        accent: '#005CAF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
}

export default new Vuetify(vuetifyPresets);
