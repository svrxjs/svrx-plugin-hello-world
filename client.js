/* globals svrx */

const { config } = svrx;
config.get('user').then((user) => {
  console.log(`Hello ${user} from browser`);
});
