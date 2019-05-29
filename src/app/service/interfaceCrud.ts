export interface InterfaceCrud{
    getAll();

    get(id: any);

    drop(object: any);

    add(object: any);

    update(object: any);
}
