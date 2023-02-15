export const navigate = {
    methods: {
        navigate(id) {
            this.$router.push({ name: 'single', params: { id: id } });
        },
    },
}