<script setup>
import { ref, computed } from "vue";

const form = ref({
  email: "",
  password: "",
  confirm_password: "",
  interests: [],
  terms: false,
});

const formDirty = ref({
  email: false,
  password: false,
  confirm_password: false,
  interests: false,
  terms: false,
});

function makeAllDirty() {
  Object.keys(formDirty.value).forEach((key) => {
    formDirty.value[key] = true;
  });
}

const formIsValid = computed(() => {
  return (
    emailIsValid.value &&
    passwordIsValid.value &&
    passwordsMatch.value &&
    interestsAreValid.value &&
    termsAreValid.value
  );
});

const showError = computed(() => {
  return {
    email: !emailIsValid.value && formDirty.value.email,
    password: !passwordIsValid.value && formDirty.value.password,
    confirm_password: !passwordsMatch.value && formDirty.value.confirm_password,
    interests: !interestsAreValid.value && formDirty.value.interests,
    terms: !termsAreValid.value && formDirty.value.terms,
  };
});

const emailIsValid = computed(() => {
  return (
    form.value.email.length > 0 &&
    form.value.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  );
});

const passwordIsValid = computed(() => {
  return form.value.password.length > 0;
});

const passwordsMatch = computed(() => {
  return form.value.password === form.value.confirm_password;
});

const interestsAreValid = computed(() => {
  return form.value.interests.length > 0;
});

const termsAreValid = computed(() => {
  return form.value.terms;
});

function register() {
  if (formIsValid.value) {
    alert("Registered!");
    console.log(form.value);
  } else {
    makeAllDirty();
    alert("Form is invalid!");
  }
}
</script>

<template>
  <div class="page-wrapper">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label class="form-control">
        <div class="label">Email</div>
        <input
          id="email"
          type="text"
          name="email"
          class="input input-bordered"
          :class="{ 'input-error': showError.email }"
          v-model="form.email"
          @blur="formDirty.email = true"
        />
        <div class="label" v-if="showError.email">
          <span class="text-red-500 label-text-alt"
            >A valid email is required</span
          >
        </div>
      </label>

      <label class="form-control">
        <div class="label">Password</div>
        <input
          id="password"
          type="password"
          name="password"
          class="input input-bordered"
          :class="{ 'input-error': showError.password }"
          v-model="form.password"
          @blur="formDirty.password = true"
        />
        <div class="label" v-if="showError.password">
          <span class="text-red-500 label-text-alt">Password is required</span>
        </div>
      </label>

      <label class="form-control">
        <div class="label">Confirm Password</div>
        <input
          id="confirm_password"
          type="password"
          name="confirm_password"
          class="input input-bordered"
          :class="{
            'input-error': showError.confirm_password,
          }"
          v-model="form.confirm_password"
          @blur="formDirty.confirm_password = true"
        />
        <div class="label" v-if="showError.confirm_password">
          <span class="text-red-500 label-text-alt">Passwords must match</span>
        </div>
      </label>

      <div class="form-control">
        <label class="label">Interested in...</label>
        <div class="flex gap-5">
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="form.interests"
              name="interests"
              value="hiking"
              @blur="formDirty.interests = true"
            />Hiking
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="form.interests"
              name="interests"
              value="biking"
              @blur="formDirty.interests = true"
            />
            Biking
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="form.interests"
              name="interests"
              value="camping"
              @blur="formDirty.interests = true"
            />
            Camping
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="form.interests"
              name="interests"
              value="skiing"
              @blur="formDirty.interests = true"
            />
            Skiing
          </label>
        </div>

        <div class="label" v-if="showError.interests">
          <span class="mt-5 text-red-500 label-text-alt"
            >Must select at least one interest</span
          >
        </div>
      </div>

      <hr class="my-5 opacity-20" />

      <label class="flex items-center">
        <input
          v-model="form.terms"
          type="checkbox"
          name="terms"
          class="w-auto checkbox checkbox-primary"
          @blur="formDirty.terms = true"
        />
        <span class="label-text">I agree to the terms and conditions</span>
      </label>
      <div class="label" v-if="showError.terms">
        <span class="mt-5 text-red-500 label-text-alt"
          >You must agree to the terms and conditions</span
        >
      </div>

      <button class="block w-full mt-5 btn btn-primary" type="submit">
        Register
      </button>
    </form>
  </div>
</template>

<style scoped>
.page-wrapper {
  @apply w-[960px] m-auto mt-20;
}
h1 {
  @apply text-3xl mb-5;
}

h2 {
  @apply text-xl mb-3;
}

input,
textarea,
select {
  @apply block mb-3 w-full;
}
input[type="checkbox"] {
  @apply checkbox inline-block my-0 mr-3;
}
</style>
