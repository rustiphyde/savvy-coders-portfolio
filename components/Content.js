import * as pages from "../pages";

export default (state) => `
<main class="container">
${pages[state.pageContent](state)}
</main>

`;
