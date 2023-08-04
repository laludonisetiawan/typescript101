describe("type data any", function () {
    it("ini adalah tipe data any", function () {
        const barang: any = {
            id_barang: 1,
            nama_barang: "keyboard mechanical alice",
            harga_barang: 12000000,
            kondisi: "baru"
        }
        barang.kodisi = "bekas";
        barang.ukuran_barang = "frame 70% "
        console.info(barang);
    })
})