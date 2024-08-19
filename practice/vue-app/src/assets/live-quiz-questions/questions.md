You are currently attending the Vue.js Certification Bootcamp

# Correct

True

#

False

---

The best beverage of all is...

#

Tea

# Correct

Coffee

#

Soda

---

I love Vue.js!

# Correct

True

#

False

---

A Vue 3 component can have multiple root elements

# Correct

True

#

False

---

The Composition API is a replacement for the Options API in Vue 3

#

True

# Correct

False

---

Which of the following correctly defines a template ref?

# Correct

```html
<script setup>
  const myRef = ref();
</script>

<template>
  <div ref="myRef"></div>
</template>
```

#

```html
<script setup>
  const myRef = ref();
</script>

<template>
  <div v-ref="myRef"></div>
</template>
```

#

```html
<script setup>
  const myRef = ref();
</script>

<template>
  <div @ref="myRef"></div>
</template>
```

#

```html
<script setup>
  const myRef = ref();
</script>

<template>
  <div :ref="myRef"></div>
</template>
```

---

Which of the following correctly attaches a click event listener to an element?

# Correct

`@click`

#

`onClick`

#

`v-event:click`

#

`v-on@click`

---

Given the following code, will the message "test" ever log to the console?

```html
<script setup>
  import { ref, computed } from "vue";

  const count = ref(0);
  const doubled = computed({
    get() {
      return count.value * 2;
    },
    set(value) {
      count.value = value / 2;
      console.log("test");
    },
  });

  count.value++;
  doubled.value = 10;
</script>
```

# Correct

Yes

#

No

---

`true-value` and `false-value` are valid Vue-specific attributes.

# Correct

True

#

False

---

Using v-html comes with some security risks and should be used cautiously.

# Correct

True

#

False

---

The below Vue code snippet is valid and adheres to best practices

```html
<template>
  <div>
    <TodoItem v-for="todo in todos" v-if="todo.shown" :todo="todo" />
  </div>
</template>
```

#

True

# Correct

False

---

The “:” sign is shorthand for?

# Correct

v-bind

#

v-on

#

v-for

#

v-colon

---

All Vue 3 APIs must be imported from Vue to use them, including `defineProps` and `defineEmits`

#

True

# Correct

False

---

`@event.prevent.self` has the same effect of `@event.self.prevent`

#

True

# Correct

False

---

Which of the following options serves a purpose similar to Pinia?

#

Vue Router

# Correct

Vuex

#

Vue CLI

#

Vite

---

Computed properties will re-evaluate whenever there's a change in the values of their dependencies, even if those dependencies aren't reactive.

#

True

# Correct

False

---

How do you handle form submission in a Vue component?

# Correct

By listening to the submit event on the form element

#

Using the `v-submit` directive on the button

#

Both of the above

#

You cannot handle form submission in Vue

---

What is the advantage of using scoped slots in Vue components?

#

They provide better performance than regular slots

# Correct

Allows the slot's content to make use of data from both the parent scope and the child scope

#

They allow easier dynamic styling of the slot content

#

All of the above

---

Refs can be used to access DOM elements directly from `script setup`

# Correct

True

#

False

---

Both v-show and v-if can be used to hide elements from the user

# Correct

True

#

False

---

The below snippet is valid

```javascript
const props = defineProps(["foo"]);

props.foo.bar = "buzz";
```

#

True

# Correct

False

---

Which of the following lifecycle hooks triggers when data changes

#

mounted

#

created

# Correct

updated

#

unmounted

---

The below binding syntax is valid

```html
<script setup>
  import { ref } from "vue";
  const url = ref("https://vueschool.io");
  const attributeName = ref("href");
</script>
<template>
  <a :[attributeName]="url"> ... </a>
</template>
```

# Correct

True

#

False

---

Which lifecycle hook is called before a component is removed from the DOM?

#

beforeDestroy

#

beforeUpdate

# Correct

beforeUnmount

#

beforeCreate

---

Which of the below triggers a custom function called `doThing` upon user focus on an element?

#

```html
<input type="text" v-focus="doThing" />
```

# Correct

```html
<input type="text" v-on:focus="doThing" />
```

#

```html
<input type="text" :focus="doThing" />
```

#

```html
<input type="text" on-focus="doThing" />
```

---

Scoped styles are used for

#

Ignoring specific styles

#

Forcing styles on the app level

#

Limiting the styles to a single element

# Correct

Limiting the styles to its component

---

When is v-show preferred over v-if?

# Correct

When an element's visibility is toggled often

#

There is no difference

#

v-if is always more performant

#

When an element uses transitions

---

Which of the following data types are valid to provide the `key` attribute

#

number

#

string

#

symbol

# Correct

All of the above

---

v-for can be used to loop over objects

# Correct

True

#

False

---

`watch` is eager by default and the callback will be called immediately once the component is rendered

#

True

# Correct

False

---

What is the recommended way to handle global state management in large Vue 3 applications?

#

Rely solely on component state

#

Implement custom event listeners for communication between components

# Correct

Utilize a state management library like Pinia

#

Use browser localStorage/sessionStorage for persistent data

---

What built-in feature in Vue 3 allows you to handle user interactions like clicks?

# Correct

v-on

#

v-for

#

v-click

#

v-on-interaction

---

The `<script>` tag must always come first, before the other tags like `<template>` and `<style>`

#

True

# Correct

False

---

`watch` and `watchEffect` both allow us to reactively perform side effects

# Correct

True

#

False

---
