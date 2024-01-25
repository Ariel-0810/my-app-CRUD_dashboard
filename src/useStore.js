import { create } from 'zustand';

const useStore = create((set) => ({
  data: [],
  modalActualizar: false,
  modalInsertar: false,
  form: {
    id: "",
    personaje: "",
    anime: "",
  },
  setItems: (items) => set({ data: items }),
  mostrarModalActualizar: (dato) => set({ form: dato, modalActualizar: true }),
  cerrarModalActualizar: () => set({ modalActualizar: false }),
  mostrarModalInsertar: () => set({ modalInsertar: true }),
  cerrarModalInsertar: () => set({ modalInsertar: false }),
  editar: (dato) => {
    set((state) => {
      const arreglo = state.data.map((registro) =>
        dato.id === registro.id ? { ...registro, personaje: dato.personaje, anime: dato.anime } : registro
      );
      return { data: arreglo, modalActualizar: false };
    });
  },
  eliminar: (dato) => {
    const opcion = window.confirm(`Estás Seguro que deseas Eliminar el elemento ${dato.id}`);
    if (opcion) {
      set((state) => {
        const arreglo = state.data.filter((item) => item.id !== dato.id);
        return { data: arreglo, modalActualizar: false };
      });
    }
  },
  insertar: () => {
    set((state) => {
      const valorNuevo = { ...state.form, id: state.data.length + 1 };
      return { modalInsertar: false, data: [...state.data, valorNuevo] };
    });
  },
  handleChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({ form: { ...state.form, [name]: value } }));
  },
}));

export default useStore;
