(function() {
    var dom = {
        lesson: document.getElementsByClassName('lesson'),
        td: document.getElementsByTagName('tbody')[0].getElementsByTagName('td'),
        target: null,
        td_lesson: document.getElementsByClassName('lesson_two'),
        class_all: document.getElementsByClassName('class-all')[0]
    }

    function drag() {
        var arr = Array.from(dom.lesson);
        arr.forEach(function(ele) {
            ele.setAttribute('draggable', true);
            ele.ondragstart = function(e) {
                console.log(e.target);
                var clone = e.target;
                dom.target = clone;
            };
        });

    }

    function dragTo() {
        var arr = Array.from(dom.td);
        arr.forEach(function(ele) {
            if (ele.className == 'only') {
                return 'ha';
            }
            ele.ondragenter = function() {
                this.style.backgroundColor = "rgba(0,0,0,0.4)";
            };
            ele.ondragover = function(e) {
                e.preventDefault();
            }
            ele.ondragleave = function() {
                this.style.backgroundColor = "#eee";
            };
            ele.ondrop = function() {
                this.style.backgroundColor = "#eee";
                var arrchild = null;
                if (dom.target.className != 'lesson_two') {
                    var str = '<li class = "lesson_two" style = "background:' + dom.target.getAttribute('data-color') + '">' + dom.target.innerText + '</li>';
                    this.innerHTML = str;
                    arrchild = this.children;
                    show(arrchild);
                } else {
                    this.appendChild(dom.target);

                }
            };

        })
    }

    function clear() {
        console.log(dom.class_all)
        dom.class_all.ondragover = function(e) {
            e.preventDefault();
        }
        dom.class_all.ondrop = function() {
            if (dom.target.className == 'lesson_two') {
                dom.target.remove();
            }
        }
    }

    function show(data) {
        console.log(data);
        var arrdata = Array.from(data);
        console.log(arrdata);
        arrdata.forEach(function(ele) {
            ele.setAttribute('draggable', true)
            ele.ondragstart = function(e) {
                console.log(112233);
                dom.target = e.target;
                console.log(dom.target.className);
            }
        })
    }
    dragTo();
    drag();
    clear();
})()