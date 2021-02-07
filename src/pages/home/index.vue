<template>
  <base-content>
    <div class="container q-pa-lg q-col-gutter-md">
      <div class="row justify-between q-col-gutter-md">
        <div class="col-xs-12 col-md-3 q-gutter-md">
          <q-card class="income">
            <q-card-section horizontal>
              <q-card-section class="col">
                <div class="text-subtitle2 text-white">
                  病毒数量
                  <q-icon color="yellow" name="trending_up" />
                </div>
                <div class="text-h6 q-mt-sm q-mb-xs text-white">
                  <countTo :startVal="0" :endVal="50" :duration="1500" />个
                </div>
              </q-card-section>
              <q-card-section class="col">
                <div style="height: 100%">
                  <v-chart :options="income" />
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
          <q-card class="expense">
            <q-card-section horizontal>
              <q-card-section class="col">
                <div class="text-subtitle2 text-white">
                  感染主机
                  <q-icon color="green" name="trending_down" />
                </div>
                <div class="text-h6 q-mt-sm q-mb-xs text-white">
                  <countTo :startVal="0" :endVal="50" :duration="1500" />台
                </div>
              </q-card-section>
              <q-card-section class="col">
                <div style="height: 100%">
                  <v-chart :options="expense" />
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
          <q-card class="total">
            <q-card-section horizontal>
              <q-card-section class="col">
                <div class="text-subtitle2 text-white">
                  当前待处理
                  <q-icon color="yellow" name="trending_up" />
                </div>
                <div class="text-h6 q-mt-sm q-mb-xs text-white">
                  <countTo :startVal="0" :endVal="3" :duration="1500" />台
                </div>
              </q-card-section>
              <q-card-section class="col">
                <div style="height: 100%">
                  <v-chart class :options="total" />
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-9">
          <q-card class="SGT-shadow col-11" style="height: 100%;min-height:390px;padding: 3px;">
            <v-chart class :options="charts2Option" autoresize />
          </q-card>
        </div>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-md-3">
          <q-card class="SGT-shadow" style="height: 430px; width: 100%; padding: 3px">
            <q-card-section class="text-subitle2">
              <p style="font-size:1.2rem;font-weight:600">安全防护团队内部使用的桌面工具</p>
              <p>目前正在开发中，如果您有意见或者建议可联系我们。</p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-3">
          <q-card class="my-card SGT-shadow">
            <q-card-section>
              <div class="text-overline text-orange-9">近期概况情况一览</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Summary</div>
            </q-card-section>
            <q-card-actions>
              <q-btn flat color="dark" label="办公网" />
              <q-btn flat color="primary" label="病毒事件" />
              <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
              />
            </q-card-actions>
            <q-slide-transition>
              <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">{{ lorem }}</q-card-section>
              </div>
            </q-slide-transition>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-6">
          <q-table
            class="SGT-shadow"
            :grid="$q.screen.xs"
            title="事件速查"
            :data="data"
            :filter="filter"
            row-key="name"
            style="height: 430px;"
          >
            <template v-slot:top-right>
              <q-input dense debounce="300" v-model="filter" placeholder="搜索">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
            <template v-slot:body="props">
              <q-tr>
                <q-td key="name" :props="props">{{ props.row.name }}</q-td>
                <q-td key="calories" :props="props">{{ props.row.via }}</q-td>
                <q-td key="fat" :props="props">{{ props.row.date }}</q-td>
                <q-td key="operating" :props="props">
                  <q-btn
                    class="btn-table text-white"
                    icon="tune"
                    label="详情"
                    @click="handleTableClick(props.row)"
                  />
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </base-content>
</template>

<script>
import countTo from 'vue-count-to'
import BaseContent from '../../components/BaseContent/BaseContent'
import { thumbStyle } from '../../components/BaseContent/thumbStyle'
import charts2Option from '../../assets/js/echarts-2'
import { income, expense, total } from '../../assets/js/echarts-3'
import chartZ from '../../assets/js/echarts-4'

export default {
  name: 'home',
  components: {
    BaseContent,
    countTo
  },
  data() {
    return {
      expanded: false,
      chartZ,
      charts2Option,
      income,
      expense,
      total,
      thumbStyle,
      lorem: '暂无信息，待更新后将同步到此处。',
      filter: '',
      data: [
        {
          name: '宏病毒',
          date: '2021-2-8 14:21:19',
          via: '天擎'
        }
      ]
    }
  },
  methods: {
    handleTableClick(e) {
      this.$router.push({
        path: 'tableDetail',
        query: {
          id: e.name
        }
      })
    }
  }
}
</script>
<style lang="css" scoped>
.my-card {
  width: 100%;
  min-height: 390px;
  height: 100%;
  /*max-width: 350px;*/
}

.income {
  width: 100%;
  background: linear-gradient(to right, #68e4bc 0%, #4ad0d1 99%);
  border-radius: 5px;
  font-size: 14px;
  padding: 11px 15px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
  box-shadow: 0 12px 12px -11px #0db4afb8;
  background-size: 200% auto;
}

.income:hover {
  background-position: right center;
  box-shadow: 0 12px 20px -11px #0db4afb8;
}

.expense {
  width: 100%;
  background: linear-gradient(to left, #fcac94 0%, #f3a183 98%);
  border-radius: 5px;
  font-size: 14px;
  padding: 11px 15px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
  box-shadow: 0 12px 12px -11px #fca76c;
  background-size: 200% auto;
}

.expense:hover {
  background-position: right center;
  box-shadow: 0 12px 20px -11px #fca76c;
}

.total {
  width: 100%;
  background: linear-gradient(90deg, #f073c8 0%, #ff6a95 99%);
  border-radius: 5px;
  font-size: 14px;
  padding: 11px 15px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
  box-shadow: 0 12px 12px -11px rgba(240, 115, 200, 0.73);
  background-size: 200% auto;
}

.total:hover {
  background-position: right center;
  box-shadow: 0 12px 20px -11px rgba(240, 115, 200, 0.73);
}

.btn-table {
  background: linear-gradient(to right, #36d1dc, #5b86e5);
  transition: all 0.3s ease-in-out;
}

.btn-table:hover {
  background-position: right center;
  box-shadow: 0 12px 20px -11px #5b86e5;
}
</style>
