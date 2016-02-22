{
    class Component {
        constructor() {
            return this.render();
        }
    }

    class Block extends Component {
        render() {
            let className = 'block',
                elemTitle = 'Заголовок элемента';

            return this.template `<div class="${className}">
               <h1>Текст блока</h1>
               <${Elem} title="${elemTitle}">
                  <div class="block__elem-content">
                      Текст элемента
                  </div>
               </${Elem}>
               ${this.props.children}
            </div>`;
        }
    }

    class Elem extends Component {
        static types = {
           title: 'string' // boolean, function, array, object, number, ['number', 'string'], node
        };

        static required = [
           'title'
        ];

        static defaults = {
            title: 'Дефолтный тайтл'
        };

        static watchStores = ['routes', 'user'];

        handleStoresChange(stores, storesStates) {
            let {
                    user: {
                        person: {
                            fullName
                        } = {}
                    } = {},
                    routes: {
                        current: route
                    } = {}
                } = stores,
                {
                    user: {
                       initialized: userInitialized
                    } = {},
                    routes: {
                       initialized: routesInitialized
                    } = {}
                } = storesStates;

            this.setState({
                storesInitialized: userInitialized && routesInitialized,
                route,
                fullName
            });
        }

        handleClick = event => {
            someAction({
                data: 'data'
            });
        };

        render() {
            return this.template `<div class="block__elem">
               <h2>${this.props.title}</h2>
               <a href="/link" onClick="${this.handleClick}">Ссылка</a>
               ${this.props.children}
            </div>`;
        }
    }

    Component.template `<${Block}>
       <p>Некоторый текст</p>
    </${Block}>`;
}