<template lang="pug">
.search-filter
  .search-filter__block
    label.search__label(for='search-news-author') Автор:
    input#search-news-author.search__input(type='text', v-model='author')
  .search-filter__block.time
    label.search__label Время публикации:
    select.select.search-filter__select(v-model='date_from')
      option(value='allTime') За все время
      option(value='year') За последний год
      option(value='month') За последний месяц
      option(value='week') За последнюю неделю
  .search-filter__block.tags
    add-tags(:tags='tags', @change-tags='onChangeTags')
  .search-filter__block.btn-news
    button-hover(@click.native='onSearchNews') Применить
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import AddTags from '@/components/News/AddTags'
export default {
  name: 'SearchFilterNews',
  components: { AddTags },
  data: () => ({
    tags: [],
    date_from: 'week',
    date_to: 0,
    offset: 0,
    itemPerPage: 20,
    author: ''
  }),
  computed: {
    ...mapGetters('global/search', ['searchText']),
    ...mapGetters('global/search', ['getFoundTotal']),
    foundPagesCount() {
      if (!!this.getFoundTotal) {
        return Math.ceil(this.getFoundTotal / this.itemPerPage);
      }
    },
  },
  methods: {
    ...mapActions('global/search', ['searchNews']),
    onChangeTags(tags) {
      this.tags = tags
    },
    onSearchNews() {
      this.searchNews({
        text: this.searchText,
        offset: this.offset,
        itemPerPage: this.itemPerPage,
        date_from: moment()
          .subtract(1, this.date_from)
          .format(),
        // moment()
        //   .subtract(1, this.date_from)
        //   .valueOf(),
        date_to: moment().format(), //this.date_to
        author: this.author
      })
    },
    loadMoreNews() {
      const bottomOffset = 2000
      let loadUsers;

      document.addEventListener('scroll', e => {
        if (window.scrollY > window.innerHeight - bottomOffset) {
          clearTimeout(loadUsers);
          loadUsers = setTimeout(() => {
            if (this.offset < this.foundPagesCount) {
              console.log(this.foundPagesCount)
              this.offset++;
              this.onSearchUsers();
            }
          }, 300);;
        }
      })
    }
  },
  mounted() {
    this.date_to = moment().valueOf();
    this.loadMoreNews();
  }
}
</script>
