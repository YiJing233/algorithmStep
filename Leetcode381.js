// 381. O(1) 时间插入、删除和获取随机元素 - 允许重复

// 设计一个支持在平均 时间复杂度 O(1) 下， 执行以下操作的数据结构。

// 注意: 允许出现重复元素。

//     insert(val)：向集合中插入元素 val。
//     remove(val)：当 val 存在时，从集合中移除一个 val。
//     getRandom：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。

// 示例:

// // 初始化一个空的集合。
// RandomizedCollection collection = new RandomizedCollection();

// // 向集合中插入 1 。返回 true 表示集合不包含 1 。
// collection.insert(1);

// // 向集合中插入另一个 1 。返回 false 表示集合包含 1 。集合现在包含 [1,1] 。
// collection.insert(1);

// // 向集合中插入 2 ，返回 true 。集合现在包含 [1,1,2] 。
// collection.insert(2);

// // getRandom 应当有 2/3 的概率返回 1 ，1/3 的概率返回 2 。
// collection.getRandom();

// // 从集合中删除 1 ，返回 true 。集合现在包含 [1,2] 。
// collection.remove(1);

// // getRandom 应有相同概率返回 1 和 2 。
// collection.getRandom();

var RandomizedCollection = function() {
    this.a = []
    this.h = {}
};

RandomizedCollection.prototype.insert = function(val) {
    this.a.push(val)
    var r = this.h[val]
    r ? this.h[val].push(this.a.length - 1) : this.h[val] = [this.a.length - 1]
    return r === void 0
};

RandomizedCollection.prototype.remove = function(val) {
    var r = this.h[val], e = this.a.length - 1
    if (r) {
        var t = r.pop()
        if (t !== e) {
            var a = this.h[this.a[e]]
            a.splice(a.findIndex(v => v === e), 1, t)
            ;[this.a[t], this.a[e]] = [this.a[e], this.a[t]]
        }
        this.a.pop()
        if (r.length === 0) delete this.h[val]
    }
    return r !== void 0
};

RandomizedCollection.prototype.getRandom = function() {
    return this.a[Math.random() * this.a.length | 0]
};