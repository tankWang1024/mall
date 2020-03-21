<template>
  <div>
    <table>
      <tr
        v-for="(item, index) in goodsDesc.size"
        :key="index + 'goodsDesc'"
        class="tr"
      >
        <td v-for="(td, indey) in item" :key="indey + 'desctd'">{{ td }}</td>
      </tr>
    </table>
    <div v-if="goodsDesc.sizeTip">
      {{goodsDesc.sizeTip}}
    </div>
    <div v-if="goodsDesc.describe" class="desc-box">
      <div
        v-for="(item, indez) in goodsDesc.describe[0]"
        :key="indez + 'describe'"
        class="line"
      >
        <div>{{ item }}</div>
        <span>{{ goodsDesc.describe[1][indez] }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsDesc",
  props: {
    goodsDesc: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
table {
  width: 96%;
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
  border-bottom: 2px solid #dedede;
}
.tr {
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid #dedede;
  margin: 0;
}
.tr td {
  flex: 1;
}
.desc-box {
  width: 96%;
  margin: 10px auto;
  border-bottom: 2px solid #dedede;
}
.line {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #dedede;
  display: flex;
}
.line div{
  width: 100px;
  margin-left: 20px;
}
.line span {
  flex: 1;
  color: var(--text-color);
  /* margin-left: 15px; */
}
</style>
