<li>
                        <a href="">

                            <!-- {dede:field.pubdate function="MyDate('Y-m-d',@me)"/} -->


                            <div class="date">
                                <div class="m"><span>[field:puldate function="MyDate('m',@me)" /]</span></div>
                                <div class="d"><span>[field:puldate function="MyDate('d',@me)" /]</span></div>
                            </div>

                            <div class="newbox">
                               <div class="title">
                                   <h2>[field:title/]</h2>
                                   <span>[field:puldate function="MyDate('Y年m月d日',@me)" /]2015年7月28日</span>
                               </div> 
                               <div class="content">
                                  [field:title function='(strlen("@me")>80?cn_substr("@me",80)."…" : "@me" )'/]
                               </div>
                            </div>

                            <div class="jiantou">
                                <span>
                                    
                                </span>
                            </div>
                            
                        </a>
                    </li>