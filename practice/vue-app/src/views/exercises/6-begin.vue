<script setup></script>

<template>
  <div class="page-wrapper">
    <h1>Register</h1>
    <form>
      <label class="form-control">
        <div class="label">Email</div>
        <input
          id="email"
          type="text"
          name="email"
          class="input input-bordered input-error"
        />
        <div class="label">
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
        />
        <!-- Show if invalid -->
        <!-- <div class="label">
          <span class="text-red-500 label-text-alt">Password is required</span>
        </div> -->
      </label>

      <label class="form-control">
        <div class="label">Confirm Password</div>
        <input
          id="confirm_password"
          type="password"
          name="confirm_password"
          class="input input-bordered"
        />
        <!-- Show if invalid -->
        <!-- <div class="label">
          <span class="text-red-500 label-text-alt">Passwords must match</span>
        </div> -->
      </label>

      <div class="form-control">
        <label class="label">Interested in...</label>
        <div class="flex gap-5">
          <label class="flex items-center">
            <input type="checkbox" name="interests" value="hiking" />Hiking
          </label>
          <label class="flex items-center">
            <input type="checkbox" name="interests" value="biking" />
            Biking
          </label>
          <label class="flex items-center">
            <input type="checkbox" name="interests" value="camping" />
            Camping
          </label>
          <label class="flex items-center">
            <input type="checkbox" name="interests" value="skiing" />
            Skiing
          </label>
        </div>

        <!-- Show if invalid -->
        <div class="label">
          <span class="mt-5 text-red-500 label-text-alt"
            >Must select at least one interest</span
          >
        </div>
      </div>

      <hr class="my-5 opacity-20" />

      <label class="flex items-center">
        <input
          type="checkbox"
          name="terms"
          class="w-auto checkbox checkbox-primary"
        />
        <span class="label-text">I agree to the terms and conditions</span>
      </label>

      <!-- Show if invalid -->
      <!-- <div class="label">
        <span class="mt-5 text-red-500 label-text-alt"
          >You must agree to the terms and conditions</span
        >
      </div> -->

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
