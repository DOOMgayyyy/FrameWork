class Pyramid extends Figure {
    constructor(size = 5) {
        super();
        this.points = [
            new Point(0, size, 0),
            new Point(-size, -size, size),
            new Point(size, -size, size),
            new Point(size, -size, -size),
            new Point(-size, -size, -size),

        ];
        this.edges = [
            new Edge(0, 1),
            new Edge(0, 2),
            new Edge(0, 3),
            new Edge(0, 4),
            new Edge(1, 2),
            new Edge(2, 3),
            new Edge(3, 4),
            new Edge(4, 1)
        ];
    }
}
