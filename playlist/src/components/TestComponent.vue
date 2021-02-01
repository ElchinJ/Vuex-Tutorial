<template>
    <div>
        <label>NBA players</label>
        <ul>
            <li v-for="player in players" :key="player">
                <span>{{player.name}}</span>
                <span>{{player.lastname}}</span>
                <span>: {{player.team}} {{setTeams}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TestComponent',
        computed: {
            players() {
                return this.$store.state.players
            },
            setTeams() {
                let west = this.$store.state.conference[0]
                let east = this.$store.state.conference[1]

                let division = this.$store.state.players.map(element => {
                        
                    console.log(element.division)
                    
                    if (element.division % 2 == 0) {
                    return west
                    }else return east 
                })
                return division
            }
        }
    }
</script>

<style lang="scss" scoped>
label {
    background-color: yellow;
}
</style>