Which of the following is a true statement?

#

The `reactive` function cannot be used for primititve values like numbers or strings

#

The `ref` function is the recommended way of defining reactive data.

#

The `reactive` function is NOT destructure friendly

# Correct

All of the above are true

---

What are double curly brackets `{{ }}` good for in Vue?

# Correct

Rendering data to the page

#

Declaring reactive data

#

Rendering data conditionally

#

Defining computed props

---

`v-model` is useful for...

#

one-way data binding

# Correct

two-way data binding

#

transporting elements to the body

#

looping over data

---

The following 2 code blocks will render the exact same thing.

```html
<script setup>
  const html = "<p></p>";
</script>
<template>
  <div>{{ html }}</div>
</template>
```

```html
<script setup>
  const html = "<p></p>";
</script>
<template>
  <div v-html="html"></div>
</template>
```

#

True

# Correct

False

---

Template refs are useful for...

#

defining reactive state

#

increasing component performance

# Correct

directly accessing DOM elements

#

cleaning up side-effects like timers

---

Using v-html comes with some security risks and should be used cautiously.

# Correct

True

#

False

---

Given the following code block what is the most appropriate value to pass to `ref()`

```html
<script setup>
  const data = ref(/*what value goes here?*/);
</script>

<template> <input type="checkbox" v-model="data" /> I agree </template>
```

#

1

# Correct

true

#

Yes

#

null

---

Given the following code block, how many times will the word "test" be logged to the console?

```html
<script>
  import { ref, computed } from "vue";
  const count = ref(0);
  const doubled = computed(() => {
    console.log("test");
    return count.value * 2;
  });
</script>
<template> {{ doubled }} {{doubled}} {{ doubled }} </template>
```

# Correct

1 time

#

2 times

#

3 times

#

0 times

---

`v-if` toggles a component's display property between `block` and `none`.

#

True

# Correct

False

---

The following code block will always render the current date and time, accurate to the second.

```html
<script setup>
  import { computed } from "vue";
  const now = computed(() => new Date());
</script>

<template> {{ now }} </template>
```

#

True

# Correct

False

---

Vuejs has an official chrome extension for developers.

# Correct

True

#

False

---

Which lifecycle hook would you use to clean up any intervals created by a component?

#

destroyed

# Correct

unmounted

#

updated

#

setup

---

It is possible to validate component event payloads at runtime.

# Correct

True

#

False

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

Given this component defintion, which of the following is a valid usage?

```html
// MyComponent.vue
<script setup>
  defineProps({
    items: Array,
    active: Boolean,
  });
</script>

<template>...</template>
```

#

```html
<MyComponent active="Yes" />
```

#

```html
<MyComponent active="false" />
```

#

```html
<MyComponent active="[]" />
```

# Correct

```html
<MyComponent active />
```

---

Both v-show and v-if can be used to hide elements from the user

# Correct

True

#

False

---

What the is the shorthand for `v-on`

# Correct

`@`

#

`:`

#

`&`

#

`#`

---

Given the following component defintion and subsequent use, will the word "Submit" render to the page?

```html
// MyButton.vue
<template>
  <button><slot>Submit</slot></button>
</template>
```

```html
// Usage in parent component

<MyButton>Click Me</MyButton>
```

#

Yes

# Correct

No

---

The below binding syntax is valid
What will the following Vue code render as HTML?

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

`<a href="https://vueschool.io"> ... </a>`

#

`<a attributeName="https://vueschool.io"> ... </a>`

#

`<a link="https://vueschool.io"> ... </a>`

#

This code is invalid and will throw an error

---

The `Transition` component is useful for animating the insertion, removal, and order change of elements that are rendered in a list.

#

True

# Correct

False

---

Which of the following classes is applied during the entire leaving phase when transitioning an element?

#

v-leave

#

v-leave-from

# Correct

v-leave-active

#

v-leave-to

---

Which of the following are components provided by Vue Router?

#

`<RouterLink />`

#

`<RouterView />`

# Correct

Both of the above

#

None of the Above

---

Which of the following best describes Pinia?

# Correct

A state management library

#

A UI component library

#

A router library

#

A static site generator

---

When defining data with the `reactive()` function, you must access it's value with `.value`

#

True

# Correct

False

---

Is the following code block valid?

```javascript
const count = reactive(0);
```

#

Yes

# Correct

No

---

Vue automatically escapes dynamic attribute bindings for security purposes.

# Correct

True

#

False

---

Which Vue directive is used for rendering a list of items?

#

`v-list`

#

`v-array`

#

`v-foreach`

# Correct

`v-for`

---

What's wrong with the following code block?

```html
<ul>
  <li v-for="user in users">{{ user.name }}</li>
</ul>
```

#

The `in` keyword should be the `of` keyword instead

# Correct

It's missing the `key` attribute

#

The array `users` should come before the individual `user` in the v-for directive

#

`v-for` is not a valid Vue directive

---

Watchers and computed properties are 2 different solutions to the same problem.

#

True

# Correct

False

---

`v-for` can be used to loop over...

#

objects

#

arrays

#

a range

# Correct

all of the above

---
