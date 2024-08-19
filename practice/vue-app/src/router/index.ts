import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";

const views = import.meta.glob("@/views/*.vue");
const lessonViews = import.meta.glob("@/views/lessons/*.vue");
const countriesViews = import.meta.glob("@/views/countries/*.vue");
const calculatorViews = import.meta.glob("@/views/calculator/*.vue");
// const exampleViews = import.meta.glob("@/views/examples/*.vue");
// const exerciseViews = import.meta.glob("@/views/exercises/*.vue");
// const liveQuizViews = import.meta.glob("@/views/live-quiz/*.vue");
// const challengeViews = import.meta.glob("@/views/challenges/*.vue");
// const takeHomeExamViews = import.meta.glob("@/views/take-home-exam/*.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...generateRoutes(views),
    ...generateRoutes(lessonViews, "/lessons"),
    ...generateRoutes(countriesViews, "/countries"),
    ...generateRoutes(calculatorViews, "/calculator"),
    // ...generateRoutes(exampleViews, "/examples"),
    // ...generateRoutes(exerciseViews, "/exercises"),
    // ...generateRoutes(liveQuizViews, "/live-quiz"),
    // ...generateRoutes(challengeViews, "/challenges"),
    // ...generateRoutes(takeHomeExamViews, "/take-home-exam"),
  ],
});

function generateRoutes(
  files: Record<string, () => Promise<unknown>>,
  pathPrefix = "",
) {
  return Object.keys(files).map((key: string) => {
    // Extract the name from the file path
    const name = (key.match(/\/([^\/]+)\.vue$/) as string[])[1];
    const path = name === "index" ? `${pathPrefix}/` : `${pathPrefix}/${name}`;
    return {
      path: path,
      name: path,
      component: files[key],
    };
  });
}

export default router;
