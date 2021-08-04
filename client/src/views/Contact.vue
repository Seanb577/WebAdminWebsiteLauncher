<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card flat>
          <v-card-title>
            Online Suggestion Form
          </v-card-title>
          <v-card-subtitle>
            <v-divider class="pb-5"/>
            We value your suggestions on how to improve our website! Please let us know what you think.
          </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col>
                <v-stepper v-model="el">
                  <v-stepper-header>
                    <v-stepper-step
                      :complete="el > 1"
                      step="1"
                    >
                      Personal Information
                    </v-stepper-step>
                    
                    <v-divider></v-divider>

                    <v-stepper-step
                      :complete="el > 2"
                      step="2"
                    >
                      Website Desgin
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step 
                      :complete="el > 3"
                      step="3"
                    >
                      Website Content
                    </v-stepper-step>

                    <v-stepper-step 
                      :complete="el > 4"
                      step="4"
                    >
                      User Friendliness
                    </v-stepper-step>
                    
                    <v-stepper-step 
                      :complete="el > 5"
                      step="5"
                    >
                      Website Performance:
                    </v-stepper-step>

                    <v-stepper-step 
                      :complete="el > 5"
                      step="6"
                    >
                      Completed!
                    </v-stepper-step>
                  </v-stepper-header>
                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-row>
                        <v-col>
                          <v-text-field
                          label="Full Name"
                          />
                        </v-col>
                        <v-col>
                          <v-text-field
                          label="Email"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn color="primary" @click="el = 2"> Continue </v-btn>
                          <v-btn text> Cancel </v-btn>
                        </v-col>
                      </v-row>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <v-row>
                        <v-col>
                          What are some arrangement changes you suggest to make the information on the pages
                          more easily accessible and intuitive to find? Include your suggestions for the layout when
                          viewing the site on different devices, e.g. mobile phones, tablets, laptops, etc
                          <v-textarea outlined class="pt-3"/>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn color="primary" @click="el = 3"> Continue </v-btn>
                          <v-btn @click="el = 1" text> Back </v-btn>
                        </v-col>
                      </v-row>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <v-row>
                        <v-col>
                        What are your ideas on making the content of the website more presentable, inviting, 
                        easy to digest and interesting?
                        <v-textarea outlined class="pt-3"/>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn color="primary" @click="el = 4"> Continue </v-btn>
                          <v-btn @click="el = 2" text> Back </v-btn>
                        </v-col>
                      </v-row>
                    </v-stepper-content>

                    
                    <v-stepper-content step="4">
                      <v-row>
                        <v-col>
                          Share your tips on how to make your experience on our site more seamless. Tell us of any
                          helpful tools you want us to add to the site to make it more usable to a larger audience and
                          easier to understand.
                        <v-textarea outlined class="pt-3"/>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn color="primary" @click="el = 5"> Continue </v-btn>
                          <v-btn @click="el = 3" text> Back </v-btn>
                        </v-col>
                      </v-row>
                    </v-stepper-content>

                    
                    <v-stepper-content step="5">
                      <v-row>
                        <v-col>
                          Do you have any advice on how to make your experience on our website 
                          more comfortable? Please include your input on the loading speed of the site.
                        <v-textarea outlined class="pt-3"/>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn color="primary" @click="el = 6"> Submit </v-btn>
                          <v-btn @click="el = 4" text> Back </v-btn>
                        </v-col>
                      </v-row>
                    </v-stepper-content>

                    <v-stepper-content step="6">
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="1">
                          <v-icon x-large color="green">mdi-check-all</v-icon>
                        </v-col>
                      </v-row>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="6">
                          <span class="title">Your suggestions have been submitted. Thank you!</span>
                        </v-col>
                      </v-row>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-if="!sent">
        <v-card>
          <v-card-title>
            Leave us your feedback.
          </v-card-title>
          <v-card-subtitle class="subtitle-1">
            <v-divider class="pb-5"/>
            <v-row>
              <v-col>
                <span class="font-weight-black">Section 1 - Usability</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                1.) Was it easy to use our site on your first visit?
                <v-radio-group>
                  <v-radio
                    label="Yes"
                    value="yes"
                  />
                  <v-radio
                    label="No"
                    value="no"
                  />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                2.) On a scale of 1 to 10, how easy was it to locate the navigation bar and 
                visit the different pages available?
                <v-row class="pt-6">
                  <v-col cols="5">
                    Poor
                  </v-col>
                  <v-col cols="3">
                    Excellent
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-rating
                      v-model="rating"
                      length="10"
                    >
                      <template v-slot:item="props">
                        <v-icon
                          large
                          :color="props.isFilled ? 'primary' : ''"
                          v-text="`mdi-numeric-${props.index}-box`"
                          @click="props.click"
                        ></v-icon>
                      </template>
                    </v-rating>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                3.) Were you able to find the information you were seeking easily?
                <v-radio-group>
                    <v-radio
                      label="Yes"
                      value="yes"
                    />
                    <v-radio
                      label="No"
                      value="no"
                    />
                </v-radio-group>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <span class="font-weight-black">Section 2 - Performance</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                4.) Did the website load efficiently on your first visit?
                <v-radio-group>
                    <v-radio
                      label="Yes"
                      value="yes"
                    />
                    <v-radio
                      label="No"
                      value="no"
                    />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                5.) How much time did it take for all elements of the page to load properly?
                <v-radio-group>
                    <v-radio
                      label="Less than 5 seconds"
                      value="lessThan5"
                    />
                    <v-radio
                      label="6 to 14 seconds"
                      value="6to14"
                    />
                    <v-radio
                    label="15 seconds or more"
                    value="moreThan15"
                    />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                6.) How quickly did you get to the necessary information?
                <v-radio-group>
                    <v-radio
                      label="Very quickly"
                      value="quickly"
                    />
                    <v-radio
                      label="Average"
                      value="average"
                    />
                    <v-radio
                      label="Took way too long"
                      value="wayTooLong"
                    />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
               7.) Did you encounter any challenges while navigating the website?
               <v-radio-group>
                    <v-radio
                      label="Yes"
                      value="yes"
                    />
                    <v-radio
                      label="No"
                      value="no"
                    />
                </v-radio-group>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <span class="font-weight-black">Section 3 - Aesthetics</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                8.) Did you find the color scheme to be appealing?
                <v-radio-group>
                    <v-radio
                      label="Yes"
                      value="yes"
                    />
                    <v-radio
                      label="No"
                      value="no"
                    />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                9.) Did the font style, font size, line spacing and word spacing make the text easy to read?
                <v-radio-group>
                    <v-radio
                      label="Yes"
                      value="yes"
                    />
                    <v-radio
                      label="No"
                      value="no"
                    />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                10.) Did the layout of the content make it more interesting to read?
                <v-radio-group>
                    <v-radio
                      label="Definitely"
                      value="definitely"
                    />
                    <v-radio
                      label="Slightly"
                      value="slightly"
                    />
                    <v-radio
                      label="Not at all"
                      value="not at all"
                    />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                11.) On a scale of 1 to 10, how do you rate the overall look and feel of the website ?
                <v-row class="pt-6">
                  <v-col cols="5">
                    Poor
                  </v-col>
                  <v-col cols="3">
                    Excellent
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-rating
                      v-model="rating"
                      length="10"
                    >
                      <template v-slot:item="props">
                        <v-icon
                          large
                          :color="props.isFilled ? 'primary' : ''"
                          v-text="`mdi-numeric-${props.index}-box`"
                          @click="props.click"
                        ></v-icon>
                      </template>
                    </v-rating>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <span class="font-weight-black">Section 1 - Usability</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                12.) What led you to our website? How did you hear about us?
                <v-radio-group>
                    <v-radio
                      label="Social Media"
                      value="Social Media"
                    />
                    <v-radio
                      label="Ad Marketing"
                      value="Ad Marketing"
                    />
                    <v-radio
                      label="Word of Mouth"
                      value="Word of Mouth"
                    />
                    <v-radio
                      label="Other"
                      value="Other"
                    />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                13.) What was your first impression as you entered the website?
                <v-text-field
                  outlined
                  dense
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                14.) On a scale of 1 to 10, how likely are you to recommend us this website to a friend or 
                family member?
                <v-row class="pt-6">
                  <v-col cols="5">
                    Not Likely
                  </v-col>
                  <v-col cols="3">
                    Absolutely
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-rating
                      v-model="rating"
                      length="10"
                    >
                      <template v-slot:item="props">
                        <v-icon
                          large
                          :color="props.isFilled ? 'primary' : ''"
                          v-text="`mdi-numeric-${props.index}-box`"
                          @click="props.click"
                        ></v-icon>
                      </template>
                    </v-rating>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row class="mt-15 mb-5" justify="center" align="end">
              <v-col cols="12" sm="2">
                <v-btn @click="sent=true" color="primary">
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col v-if="sent">
        <v-card>
          <v-card-title>
            <v-container>
              <v-row justify="center">
                <v-col cols="12" sm="1">
                  <v-icon color="green" x-large>
                    mdi-check-all
                  </v-icon>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="2" sm="4">
                  Your feedback was sent. Thank you !
                </v-col>
              </v-row>
            </v-container>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        el: 1,
        rating: 1,
        sent: false
      }
    },
  })
</script>

<style scoped>

</style>