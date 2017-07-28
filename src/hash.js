// hash playground

function HashTable(obj)
{
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }
}

var h = new HashTable({one: 1, two: 2, three: 3, "i'm no 4" : 4 });

console.log(h);
