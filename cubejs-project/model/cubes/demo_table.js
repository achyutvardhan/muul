cube(`demo_table`, {
  sql_table: `public.demo_table`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },

    
    name: {
      sql: `name`,
      type: `string`
    },
    
    timestamp: {
      sql: `timestamp`,
      type: `time`
    }
  },
  
  measures: {
    value: {
      sql: `value`,
      type: `string`
    },
    count: {
      type: `count`,
      drillMembers: [name, timestamp]
    },
    totalValue: {
      sql: `value`,
      type: `sum`
    },
    avgValue: {
      sql: `value`,
      type: `avg`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
