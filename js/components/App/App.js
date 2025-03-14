class App extends Component {
    constructor(options) {
        super(options);

        new Menu({
            id: 'menu',
            parent: this.id,
            template: template.menuTemplate,
            callbacks: {
                show: (name) => this.showContent(name),
            }
        });

        this.esse = new Esse({
            id: 'esse',
            parent: this.id,
            template: template.esseTemplate
        });

        this.targets = new Targets({
            id: 'targets',
            parent: this.id,
            template: template.targetsTemplate
        });

        this.calc = new Calc({
            id: 'calc',
            parent: this.id,
            template: template.calcTemplate,
        });
        this.graph2D = new Graph2D({
            id: 'graph2D',
            parent: this.id,
            template: template.graph2DTemplate,
        });
        this.graph3D = new Graph3D({
            id: 'graph3D',
            parent: this.id,
            template: template.graph3DTemplate,
        });
        
        this.showContent('graph3D');
    }

    showContent(name) {
        this.esse.hide();
        this.graph2D.hide();
        this.graph3D.hide();
        this.targets.hide();
        this.calc.hide();
        this[name].show();

}
}