import format from 'date-fns/format';


export default class TextClock {
    constructor(span) {
        this.span=span;
    }

    update2() {
       this.doWork(this.tick);
    }

    tick(sp) {
        console.log(sp);
        sp.textContent = format(new Date(), 'h:mm:ssa');
    }

    // from
    // https://odetocode.com/blogs/scott/archive/2015/01/05/more-with-arrow-functions-in-es6.aspx
    doWork(callback) {
        setTimeout(() => {
            callback(this.span)
            this.doWork(callback);
        }, 1000);
    }
}

