<template>
    <div class="col-div-8">
        <div class="box-8">
            <div class="content-box">
                <p>Services les plus vendus <span>Tout voir</span></p>
                <br/>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr v-for="item in donnee" :key="item.id" >
                        <td>{{ item.company }}</td>
                        <td>{{ item.contact }}</td>
                        <td>{{ item.country }}</td>
                    </tr>
                </table>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TableListe",
        props: {
            donnee : {
                type : Array,
                required : true,
                default : () => [
                    {
                        id : "1",
                        company : "15",
                        contact : "24",
                        country : "3",
                    },
                    {
                        id : "2",
                        company : "4",
                        contact : "45",
                        country : "49",
                    }
                ]
            }
        }
    }
</script>