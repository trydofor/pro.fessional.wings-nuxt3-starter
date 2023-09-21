# Wings Nuxt3 Starter

* 💎 [Typescript](https://www.typescriptlang.org) Main Language [Apache License 2.0]
* 💎 [Volta](https://volta.sh) JavaScript Tool Manager [BSD 2-CLAUSE]
* 🚀 [Vue3](https://vuejs.org) JavaScript Framework [MIT]
* 🚀 [Nuxt3](https://nuxt.com) Web Framework [MIT]
* 💄 [PrimeVue](https://primevue.org) UI Framework [MIT]
* 💄 [Tailwind](https://tailwindcss.com) CSS framework [MIT]
* 🧩 [EsLint](https://eslint.org) Code Linter [MIT]
* 🧩 [Prettier](https://prettier.io) Code Formatter [MIT]

[MIT]: https://opensource.org/license/mit/
[BSD 2-CLAUSE]: https://opensource.org/license/bsd-2-clause/
[Apache License 2.0]: https://www.apache.org/licenses/LICENSE-2.0.html

## Setup History

```bash
## install and init
curl https://get.volta.sh | bash
volta install node
npx nuxi@latest init wings-nuxt3-starter
volta pin node

## eslint for nuxt
npm i -D @nuxt/eslint-config eslint
## primevue
npm i primevue
## tailwindcss
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init
## prettier
npm i -D prettier prettier-plugin-tailwindcss
## eslint for uve
npm i -D eslint-plugin-vue
npm i -D eslint-config-prettier
npm i -D eslint-plugin-prettier
npm i -D vue-eslint-parser
npm i -D typescript
npm i -D @typescript-eslint/parser


## dev npm command
npm install
npm run dev
npm run build
npm run preview
```
