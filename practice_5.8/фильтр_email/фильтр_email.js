function filter(mail, blacklist) {
    // console.log(mail, blacklist);
    for (let list of mail) {
        // console.log(list);
      let z = blacklist.indexOf(list);
    //   console.log(z)
      if (z === -1) {
        emails.push(list)
      }
    }
}

let emails = [];
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];
let blackList = [ 'jsfunc@mail.ru','goodday@day.ru'];

filter(whiteList, blackList);
console.log(emails);