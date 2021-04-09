let allPeople = []
let swapi = 'https://swapi.dev/api/people';

(async() => {
    let resp = await fetch(swapi)
    allPeople = await resp.json()
    document.querySelector('#greeting').innerHTML = new PeopleComponent(allPeople.results[0]).render()
})();

document.componentRegistry = {};
document.nextId = 0;

class Component {
    constructor() {
        this._id = ++document.nextId;
        document.componentRegistry[this._id] = this;
    }
}

class PeopleComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name,
            gender: props.gender,
            mass: props.mass
        }
    }

    render() {
        return `<div class="people">
                    <h2>${this.state.name}</h2>
                    <h3>${this.state.gender}</h3>
                    <h3>Current Mass: ${this.state.mass}</h3>
                    <textarea onchange="document.componentRegistry[${this._id}].setMass(this.value)">
                        ${this.state.mass}
                    </textarea>
                </div>`
    }

    setMass(newMass) {
        this.state.mass = newMass;
        update();
    }
}

function update() {
    document.querySelector('#greeting').innerHTML = document.componentRegistry[1].render()
}

// function PeopleListDiv(peoplejson) {
//     return `<div>
//                 ${peoplejson.map(data => new PeopleComponent(data).render()).join('')}
//             </div>`
// }

