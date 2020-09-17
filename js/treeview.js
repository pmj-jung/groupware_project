$(function() {
    $("#tree").treeview({
        collapsed: false,
        animated:0,
        control: "#sidetreecontrol",
        persist: "location"
    });

    $("#tree-dept").treeview({
        collapsed: false,
        animated:0,
        control: "#sidetreecontrol-dept",
        persist: "location"
    });
    $("#tree-rank").treeview({
        collapsed: false,
        animated:0,
        control: "#sidetreecontrol-rank",
        persist: "location"
    });
    $("#tree-recruit").treeview({
        collapsed: false,
        animated:0,
        control: "#sidetreecontrol-recruit",
        persist: "location"
    });
});