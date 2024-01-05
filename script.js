const elements = [];

function form_action(){
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let req = document.getElementById("req").value;
    let options = [document.getElementById("o1").value, document.getElementById("o2").value, document.getElementById("o3").value];

    if(type == "select")
    {
        var obj = {
            "name" : name,
            "type" : type,
            "req" : req,
            "options" : options
        };
    }

    else
    {
        var obj = {
            "name" : name,
            "type" : type,
            "req" : req
        };
    }
    

    elements.push(obj);

    document.getElementById("name").value = "";
    document.getElementById("o1").value = "";
    document.getElementById("o2").value = "";
    document.getElementById("o3").value = "";
}

function create_form(){
    const text = document.querySelectorAll('.form')
    for (const el of text) {
        el.remove();
    }

    let d = document.createElement("form");
    d.setAttribute("class", "form");

    let h = document.createElement("h1");
    h.innerText = "Form";
    d.appendChild(h);

    let u = document.createElement("div");
    for (ele in elements)
    {
        if(elements[ele]["type"] == "select")
        {
            var l = document.createElement("label");
            l.innerText = elements[ele]["name"];
            l.style.margin = "10px";

            var i = document.createElement("select");
            for(o in elements[ele]["options"])
            {
                if (elements[ele]["options"][o].length > 0)
                {
                    let opt = document.createElement("option");
                    opt.innerText = elements[ele]["options"][o];
                    i.appendChild(opt);
                }
            }

            if(elements[ele]["req"] == 'no')
            {
                var opt = document.createElement("option");
                opt.innerText = "Select an Option";
                opt.setAttribute("selected", true);
                i.append(opt)
            }
        }
        else
        {
            var l = document.createElement("label");
            l.innerText = elements[ele]["name"];
            l.style.margin = "10px";

            var i = document.createElement("input");
            i.setAttribute("type", elements[ele]["type"]);

            if(elements[ele]["type"] == "password")
            {
                i.setAttribute("minlength", 8);
            }

            if(elements[ele]["req"] == 'yes')
            {
                l.innerText += "*"
                i.setAttribute("required", true);
            }
        }

        u.appendChild(l);
        u.appendChild(i);
    }

    d.appendChild(u);
    let btn = document.createElement("button");
    btn.innerText = "Submit";
    d.appendChild(btn);

    document.body.appendChild(d);

    elements.length = 0;
}
